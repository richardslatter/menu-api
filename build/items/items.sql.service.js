"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEntry = exports.updateEntry = exports.createEntry = exports.findQuery = exports.findAllQuery = void 0;
const index_1 = require("../index");
/**
 * SQL Query Functions
 */
const findAllQuery = async () => {
    const conn = await index_1.connection;
    const res = await conn.query('SELECT * FROM items');
    return res[0];
};
exports.findAllQuery = findAllQuery;
const findQuery = async (id) => {
    const conn = await index_1.connection;
    const res = await conn.query('SELECT * from items WHERE id =?', [id]);
    return res[0];
};
exports.findQuery = findQuery;
const createEntry = async (id, newItem) => {
    const newITEM = {
        id,
        ...newItem
    };
    const conn = await index_1.connection;
    const { name, price, description, image } = newItem;
    try {
        const res = await conn.query('INSERT INTO items ( name, price, description, image) VALUES (?,?,?,?)', [name, price, description, image]);
        return res[0];
    }
    catch (e) {
        console.error(e);
        throw e;
    }
};
exports.createEntry = createEntry;
const updateEntry = async (id, newItem) => {
    const conn = await index_1.connection;
    const { name, price, description, image } = newItem;
    const res = await conn.query('UPDATE items SET id=?, name=?, price=?, description=?, image=? WHERE id=?', [id, name, price, description, image, id]);
    return res[0];
};
exports.updateEntry = updateEntry;
const deleteEntry = async (id) => {
    const conn = await index_1.connection;
    try {
        const res = await conn.query('DELETE FROM items WHERE id=?', [id]);
        return null;
    }
    catch (e) {
        console.error(e);
        throw (e);
    }
};
exports.deleteEntry = deleteEntry;
//# sourceMappingURL=items.sql.service.js.map