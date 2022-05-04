import { BaseItem, Item } from "./item.interface";
/**
 * SQL Query Functions
 */
export declare const findAllQuery: () => Promise<Item[]>;
export declare const findQuery: (id: number) => Promise<Item>;
export declare const createEntry: (id: number, newItem: BaseItem) => Promise<Item>;
export declare const updateEntry: (id: number, newItem: BaseItem) => Promise<Item>;
export declare const deleteEntry: (id: number) => Promise<null>;
