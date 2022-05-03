import {connection} from '../index';
import {Items} from './items.interface';
import {BaseItem, Item} from "./item.interface";

/**
 * In-Memory Store
 */

let backup_items: Items = {
    1: {
        id: 1,
        name: "Backup Burger",
        price: 599,
        description: "Tasty",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
    },
    2: {
        id: 2,
        name: "Backup Pizza",
        price: 299,
        description: "Cheesy",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
    },
    3: {
        id: 3,
        name: "Backup Tea",
        price: 199,
        description: "Informative",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
    }
};

/*

export const NEWfindAll = async (): Promise<Item[] | null> => {
    const results = await connection.query('SELECT * FROM items');
    console.log(results);

    return null;

    /*
    return await new Promise((success, failure) => {
        connection.query('SELECT * FROM items', function (e: any, results: Item[]) {
            if (e) {
                failure(e);
            } else {
                const data: Item[] = results;
                success(data);
            }
        })
    })
}


export const NewFind = async (id: number): any => {
    console.log('test');

    /*
    return await new Promise((success, failure) => {
        connection.query('SELECT * FROM items where id = ?', [id], function (e: any, result) {
            if (e) {
                failure(e);
            } else {
                const data = result;
                success(data);
            }
        })
    })
}
*/


export const newfindAll = async (): Promise<Item[]> => {
    const conn = await connection;
    const res = await conn.query('SELECT * FROM items')
    return res[0] as Item[];
}

export const newfind = async (id: number): Promise<any> => {
    const conn = await connection;
    const res = await conn.query('SELECT * from items WHERE id =?', [id])
    return res[0];
}


