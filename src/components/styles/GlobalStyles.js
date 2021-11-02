import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        background-color: #131d2e;
    }

    video::-internal-media-controls-overlay-cast-button {
        display: none;
    }
`