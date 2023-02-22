/**
 * the component TodoList describe the screen n° ...
 */

import { useStore } from "@nanostores/react";
import {
  addItem,
  Item,
  toggleIsDone,
  setItemName,
  TodoListStore,
  deleteItem,
} from "../store/TodoList.store";
import {
  AddItemContainer,
  ItemListContainer,
  ItemStyle,
  Title,
  TodoListContainer,
} from "../style/TodoList.style";

export default function TodoList() {
  //  4. visual-UI---------------------------------
  const { itemName, itemList } = useStore(TodoListStore);

  return (
    <>
      <TodoListContainer>
        <Title>
          <div>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div>Petite courses</div>
        </Title>
        <AddItemContainer>
          <input type="text" value={itemName} onChange={setItemName} />

          <div onClick={addItem}>
            <i className="fa-solid fa-circle-plus"></i>
          </div>
        </AddItemContainer>
        <ItemListContainer>
          <ul>
            {itemList.map((item: Item, index: number) => (

              <li key={index}>
                <ItemStyle isDone={item.isDone }>
                <p onClick={(e) => toggleIsDone(index)}>
                  {item.name}-{index}-{" " + item.isDone}
                </p>
                <button onClick={(e) => deleteItem(index)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
                </ItemStyle>
              </li>
            ))}
          </ul>
        </ItemListContainer>
      </TodoListContainer>
    </>
  );
}

{
  /* {item.isDone ? <myLi key={index}> :<isDone key={index} ></isDone>} > */
}
