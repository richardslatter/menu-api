import mysql from "mysql2/promise";

let pool: mysql.Pool;

export const getConnection = async (): Promise<mysql.Pool> => {
  if (!pool) {
    try {
      pool = mysql.createPool({
        host: "host.docker.internal",
        user: "root",
        password: "password", // I know its bad
        database: "menu",
      });
    } catch (e) {
      throw new Error("can't connect to database");
    }
  }
  return pool;
};
