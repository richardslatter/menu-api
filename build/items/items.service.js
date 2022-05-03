"use strict";
/**
 * Data Model Interfaces
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.find = exports.findAll = void 0;
const items_sql_service_1 = require("./items.sql.service");
/**
 * In-Memory Store
 */
let items = {
    1: {
        id: 1,
        name: "Burger",
        price: 599,
        description: "Tasty",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
    },
    2: {
        id: 2,
        name: "Pizza",
        price: 299,
        description: "Cheesy",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
    },
    3: {
        id: 3,
        name: "Tea",
        price: 199,
        description: "Informative",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
    }
};
/**
 * Service Methods
 */
//export const findAll = async (): Promise<Item[]> => Object.values(items);
const findAll = async () => (0, items_sql_service_1.newfindAll)();
exports.findAll = findAll;
const find = async (id) => (0, items_sql_service_1.newfind)(id);
exports.find = find;
//export const find = async (id: number): Promise<Item> => NewFind(id);
const create = async (newItem) => {
    const id = new Date().valueOf();
    items[id] = {
        id,
        ...newItem
    };
    return items[id];
};
exports.create = create;
const update = async (id, itemUpdate) => {
    const item = await (0, exports.find)(id);
    if (!item) {
        return null;
    }
    items[id] = { id, ...itemUpdate };
    return items[id];
};
exports.update = update;
const remove = async (id) => {
    const item = await (0, exports.find)(id);
    if (!item) {
        return null;
    }
    delete items[id];
};
exports.remove = remove;
//# sourceMappingURL=items.service.js.map