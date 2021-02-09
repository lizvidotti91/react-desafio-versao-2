import { createGlobalStyle } from 'styled-components';

// Estilo Global (Reset CSS)
const Global = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
    }
`;

export default Global;