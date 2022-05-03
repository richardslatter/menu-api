"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const index_1 = require("../index");
const test = async () => {
    await index_1.connection.query('SELECT * FROM items', function (err, results, fields) {
    });
};
exports.test = test;
//# sourceMappingURL=items.SQLservice.js.map