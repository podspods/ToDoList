/**
 *
 * * main style and common  style for the application
 */
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
/**
 * color theme from coolor.co
 * for the whole application
 */
export const AppTheme = {
  mainColors: {
    back: "#075252",
    lessback: "#075252",
    mid: "#557859",
    lessfore: "#EDFFFB",
    fore: "#EDFFFB",
  },
  subColors: {
    back: "#BB8579",
    lessback: "#BB8579",
    mid: "#BB8579",
    lessfore: "#BB8579",
    fore: "#F5F5F5",
  },

  font: {
    regular: "Poppins,sans-serif",
    extra: "Lobster,sans-serif",
    Logo: "Lobster,sans-serif",
  },
  BorderRadius: "0.6rem",
};

export const App = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
`;

/**
 * Contient le style globale de l'application
 */
export const AppGlobalStyle = createGlobalStyle`
  :root {
    background-color:${AppTheme.mainColors.back}
  }
  html, body, #root {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
    font-size: 18px;
  }
  * {
    box-sizing: border-box;
  }
  .hide{
    display: none;
  }
`;
