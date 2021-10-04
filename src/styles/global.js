import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background-color: #4cc9f0;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style-type: none;
    }
`;
