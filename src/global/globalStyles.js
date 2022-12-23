import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        text-decoration: none;
        box-sizing: border-box;
    }

    *:focus {
        outline-style: none;
    }

    html {
        /* Light */
        --white: #c9d1d9;
    
        /* Dark */
        --black: #0d1117;
        --b100: #161b22;

        --border: #30363d;
        /* Color */
        --blue: #58a6ff;
        --green: #238636;
        --green-hover: #2ea043;

        font-size: 14px;
        scroll-behavior: smooth;
    }

    body {
        font-family: "Roboto", sans-serif;
        overflow-x: hidden;
        width: 100vw;
        min-height: 100vh;
        background-color: var(--black);
    }

    input, button {
        font-family: "Roboto", sans-serif;
    }

    .sr-only {
        position: absolute;
        height: 1px;
        width: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip-path: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }
`;
