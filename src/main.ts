import app from "./app";
import { getConnection } from "./database";
import dotenv from "dotenv";

dotenv.config(); // load config

export const envcheck = () => {
  if (!process.env.PORT) {
    throw new TypeError("help");
  }
};

envcheck();

const PORT: number = parseInt(process.env.PORT as string, 10);

getConnection()
  .then(async () =>
    app.listen(PORT, () => {
      console.log("Listening on port", PORT);
    })
  )
  .catch((e) => {
    console.error(e);
    throw new e();
  });
