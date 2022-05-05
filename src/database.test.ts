import {getConnection} from "./database";
import mysql from "mysql2/promise";

describe('The mySQL Item Service', () => {

    // Initialise and Complete

    afterEach(async () => {
        const conn = await getConnection();
        await conn.end();
    });

    //Tests

    it('should connect to the database', async () => {
        const conn = await getConnection();
        expect(conn).toBeDefined();
    });


    // TBD
    it.skip('should throw an error if it can\'t connect', async () => {
        jest.mock("mysql2/promise", () => {
            createPool: jest.fn(() => {
                console.log('here')
                throw new Error('here')
            })
        })

        const conn = await getConnection();
    })
});

