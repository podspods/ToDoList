import styled from "styled-components";
import { AppTheme } from "./App.style";

export const TodoListContainer = styled.div`
  background-color: ${AppTheme.mainColors.back};
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
`;

export const newLi = styled.li``;

export const Title = styled.div`
  min-width: 100vw;
  background-color: ${AppTheme.mainColors.back};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${AppTheme.font.extra};
  position: absolute;
  top: 0;
  font-size: 2.5rem;
  padding: 0 20px;
  flex-grow: 1;
`;

export const AddItemContainer = styled.div`
  background-color: ${AppTheme.mainColors.fore};
  min-width: 100vw;
  display: flex;
  justify-content: stretch;
  align-items: center;
  font-size: 2rem;
  flex-grow: 1;
  input {
    margin: 10px;
    height: 50px;
    width: 300px;
    border: none;
    font-size: 1.5rem;
    background-color: ${AppTheme.mainColors.fore};
  }
`;
export const ItemListContainer = styled.div`
  min-width: 100vw;
  background-color: ${AppTheme.subColors.fore};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  font-size: 1rem;
  flex-grow: 3;
  ul {
    min-width: 100vw;
  }
  li{

    list-style: none;
  }
`;


export const ItemStyle = styled.div`
  background-color: ${AppTheme.subColors.fore};
  i {
    font-size: 2rem;
    color: ${AppTheme.subColors.back};
  }
  list-style-type: none;
  align-items: center;
  display: flex;
  justify-content: space-between;

`;
export const myLi = styled.li`
  font-size: 5rem;
  color: ${AppTheme.subColors.back};
`;

export const isDone = styled.li`
  color: ${AppTheme.mainColors.fore};
  background-color: ${AppTheme.mainColors.back};
`;

