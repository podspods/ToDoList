/**store for screen2 : Todo list
 *
 *
 *
 */

import { action, map } from "nanostores";
import { ChangeEvent, MouseEvent, MouseEventHandler } from "react";

export type Item = {
  name: string;
  isDone: boolean;
  isDelete: boolean;
  idItem: number;
};

export type TodoList = {
  itemName: string;
  itemList: Item[];
  nbUpdate : number;
};

export const TodoListStore = map<TodoList>({
  itemName: "",
  itemList: [],
  nbUpdate: 0 ,
});

export const setItemName = action(
  TodoListStore,
  "setItemName",
  (store, e: ChangeEvent<HTMLInputElement>) => {
    store.setKey("itemName", e.currentTarget.value);
  }
);

export const addItem = action(
  TodoListStore,
  "AddItem",
  (store, event: MouseEvent<HTMLDivElement>) => {
    const { itemName } = store.get();
    const { itemList } = store.get();
    const id: number = itemList.length;

    const newItem: Item = {
      name: itemName,
      isDone: false,
      isDelete: false,
      idItem: id,
    };

    const newItemList = [...itemList, newItem];
    store.setKey("itemList", newItemList);
  }
);

export const toggleIsDone = action(
  TodoListStore,
  "AddItem",
  (store, idItem: number) => {
    const { itemList } = store.get();
    const { nbUpdate } = store.get();
    itemList[idItem].isDone = !itemList[idItem].isDone;
    store.setKey("itemList", itemList);
    store.setKey("nbUpdate", nbUpdate+1);
  }
);

export const deleteItem = action(
  TodoListStore,
  "DeleteItem",
  (store, idItem: number) => {
    const { itemList } = store.get();
    const { nbUpdate } = store.get();
    const removedList = itemList.splice(idItem, 1);
    store.setKey("itemList", itemList);
    store.setKey("nbUpdate", nbUpdate+1);
  }
);
