"use strict";
/**
 * Required External Modules and Interfaces
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsRouter = void 0;
const express_1 = __importDefault(require("express"));
const ItemService = __importStar(require("./items.service"));
/**
 * Router Definition
 */
exports.itemsRouter = express_1.default.Router();
/**
 * Controller Definitions
 */
// GET items
exports.itemsRouter.get("/", async (req, res) => {
    try {
        const items = await ItemService.findAll();
        res.status(200).send(items);
    }
    catch ({ message }) {
        res.status(500).send(message);
    }
});
// GET items/:id
exports.itemsRouter.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const item = await ItemService.find(id);
        if (item) {
            res.status(200).send(item);
        }
        res.status(404).send("Item Not Found");
    }
    catch ({ message }) {
        res.status(500).send(message);
    }
});
// POST items
exports.itemsRouter.post("/", async (req, res) => {
    try {
        const item = req.body;
        const newItem = await ItemService.create(item);
        res.status(201).json(newItem);
    }
    catch ({ message }) {
        res.status(500).send(message);
    }
});
// PUT items/:id
exports.itemsRouter.put("/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const itemUpdate = req.body;
        const existingItem = await ItemService.find(id);
        if (existingItem) {
            const updatedItem = await ItemService.update(id, itemUpdate);
            return res.status(200).json(updatedItem);
        }
        const newItem = await ItemService.create(itemUpdate);
        res.status(201).json(newItem);
    }
    catch ({ message }) {
        res.status(500).send(message);
    }
    return void 0;
});
// DELETE items/:id
exports.itemsRouter.delete("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        await ItemService.remove(id);
        res.sendStatus(204);
    }
    catch ({ message }) {
        res.status(500).send(message);
    }
});
//# sourceMappingURL=items.router.js.map