/**
 * Data Model Interfaces
 */

import { BaseItem, Item } from "./item.interface";
import {
  createEntry,
  deleteEntry,
  findAllQuery,
  findQuery,
  updateEntry,
} from "./items.sql.service";

/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[]> => findAllQuery();

export const find = async (id: number): Promise<Item> => findQuery(id);

export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = new Date().valueOf();
  const newITEM = createEntry(id, newItem);

  return newITEM;
};

export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Item | null> => {
  const item = await findQuery(id);

  if (!item) {
    return null;
  }

  const newITEM = await updateEntry(id, itemUpdate);

  return newITEM;
};

export const remove = async (id: number): Promise<null | void> => {
  const item = await findQuery(id);
  if (!item) {
    return null;
  }

  await deleteEntry(id);
};
