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
        overflow-x: hidden;
        background: var(--white);
    }

    main{
        width: 100%;
        height: 220px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--green);
    }

    .main-container{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    .cards-container{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        max-width: 1200px;
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
    

    @media(max-width: 1080px){
        .main-container{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
            height: 32vh;
        }

        main{
            padding: 2rem;
            height: 32vh;
        }
    }
        .cards-container{
            display: flex;
            justify-content: flex-start;
        }

    @media(max-width: 900px){
        .cards-container{
            display: flex;
            justify-content: center;
        }

    }
`;
