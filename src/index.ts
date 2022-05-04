/**
 * Required External Modules
 */

import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import {itemsRouter} from "./items/items.router";
import {errorHandler} from "./middleware/error.middleware";
import {notFoundHandler} from "./middleware/not-found.middleware";
import mysql from 'mysql2/promise';

dotenv.config();


/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();


/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/menu/items", itemsRouter);
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * mySQL Setup
 */

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password', // I know its bad
    database: 'menu'
});


/**
 * Server Activation
 */

connection
    .then(() =>
        app.listen(PORT, () => {
            //console.log('Listening on port', PORT);
        })
    )
    .catch((e) => {
        console.error(e)
        throw new e;
    })

