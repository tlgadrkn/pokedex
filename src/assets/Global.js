import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
        *, *::before, *::after {
            box-sizing:border-box;
            margin: 0;
        }
    }
    body {
        font-family:  Helvetica, sans-serif;
        color: #333;
        background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
        background-repeat: no-repeat;
        font-size: 16px;
        scroll-behavior:smooth;
        min-height: 100vh;
    }
    input, input::before, input::after {
        outline: none;
    }
`;
