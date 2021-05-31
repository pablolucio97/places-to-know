import { createGlobalStyle } from "styled-components";

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
        width: 100%;
        display: flex;
        justify-content: center;
        overflow-x: hidden;
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

    .main-container{
        min-width: 1280px;
        display: flex;
        justify-content: space-evenly;
    }

    .cards-container{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        width: 100%;
        padding: 1.6rem;
        margin: 0 auto;
    }

    select{
        width: 300px;
        height: 48px;
        padding: .2rem;
        border-radius: 7px;
        border: none;
    }

`;
