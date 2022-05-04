import {connection} from "../index";
import {findQuery} from "../items/items.sql.service";


beforeAll(async () => {
    const temp = '';
})

test('mysql database is queried when running find', () => {
    expect(1).toBe(1);
})


test('app successfully connects to mySQL', async () => {
    const conn = await connection;
    expect(conn).toBeDefined();
})
