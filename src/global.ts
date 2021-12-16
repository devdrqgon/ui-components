import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    body {
        /* font-size: 18px;
        line-height: normal;
        font-family: Rotunda;
        font-weight: 400;
        font-style: normal; */
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        line-height: 1.5;
        background: #FBFCFD;
        color: var(--text-color, #1A1A1A);
        word-break: break-word;
        overflow-wrap: break-word;
        -webkit-font-smoothing: antialiased;
        
        
    }

  

`

// ${props => props.theme.colors.text}