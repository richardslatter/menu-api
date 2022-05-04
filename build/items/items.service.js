"use strict";
/**
 * Data Model Interfaces
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.find = exports.findAll = void 0;
const items_sql_service_1 = require("./items.sql.service");
/**
 * Service Methods
 */
const findAll = async () => (0, items_sql_service_1.findAllQuery)();
exports.findAll = findAll;
const find = async (id) => (0, items_sql_service_1.findQuery)(id);
exports.find = find;
const create = async (newItem) => {
    const id = new Date().valueOf();
    const newITEM = (0, items_sql_service_1.createEntry)(id, newItem);
    return newITEM;
};
exports.create = create;
const update = async (id, itemUpdate) => {
    const item = await (0, items_sql_service_1.findQuery)(id);
    if (!item) {
        return null;
    }
    const newITEM = await (0, items_sql_service_1.updateEntry)(id, itemUpdate);
    return newITEM;
};
exports.update = update;
const remove = async (id) => {
    const item = await (0, items_sql_service_1.findQuery)(id);
    if (!item) {
        return null;
    }
    await (0, items_sql_service_1.deleteEntry)(id);
};
exports.remove = remove;
//# sourceMappingURL=items.service.js.map