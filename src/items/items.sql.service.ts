import {connection} from '../index';
import {Items} from './items.interface';
import {BaseItem, Item} from "./item.interface";

/**
 * SQL Query Functions
 */

export const findAllQuery = async (): Promise<Item[]> => {
    const conn = await connection;
    try {
        const res = await conn.query('SELECT * FROM items')
        return res[0] as Item[];
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export const findQuery = async (id: number): Promise<Item> => {
    const conn = await connection;
    try{
        const res = await conn.query('SELECT * from items WHERE id =?', [id])
        return res[0] as unknown as Item;
    }catch (e) {
        console.error(e);
        throw e;
    }
}

export const createEntry = async (id: number, newItem: BaseItem): Promise<Item> => {
    const newITEM = {
        id,
        ...newItem
    };

    const conn = await connection;
    const {name,price,description,image} = newItem;
    try {
        const res = await conn.query('INSERT INTO items ( name, price, description, image) VALUES (?,?,?,?)',
            [name,price,description,image])
        return res[0] as unknown as Item;
    } catch (e) {
        console.error(e);
        throw e;
    }


}

export const updateEntry = async(id: number, newItem: BaseItem): Promise<Item> => {
    const conn = await connection;

    const {name,price,description,image} = newItem;

    try{
        const res = await conn.query('UPDATE items SET id=?, name=?, price=?, description=?, image=? WHERE id=?',
            [id, name, price, description, image, id]);
        return res[0] as unknown as Item;
    } catch(e) {
        console.error(e);
        throw(e);
    }

}


export const deleteEntry = async(id:number): Promise<null> => {
    const conn = await connection;

    try{
        const res = await conn.query('DELETE FROM items WHERE id=?', [id]);
        return null;
    } catch(e) {
        console.error(e);
        throw(e);
    }
}
