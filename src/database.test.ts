import { getConnection } from "./database";

describe("The mySQL Item Service", () => {
  // Initialise and Complete

  beforeEach(async () => {});

  afterEach(async () => {});

  //Tests

  it("should connect to the database", async () => {
    const connection = await getConnection();

    expect(connection).toBeDefined();

    await connection.end();
  });

  jest.mock("mysql2/promise", () => ({
    ...jest.requireActual("mysql2/promise"),
    createPool: jest.fn().mockResolvedValue(0),
  }));

  // TBD
  it("should throw an error if it can't connect", async () => {
    const connection = await getConnection();

    console.log(connection);

    await connection.end();
  });
});
