import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --white: #fff;
        --green: #4F9419;
        --dark-green: #006C18;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
        background: var(--white);
    }

    main{
        width: 100%;
        height: 220px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: var(--green)
    }

`