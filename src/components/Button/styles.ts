import styled from 'styled-components'

export const Button = styled.button`
    width: 200px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #006C18;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 7px;
    font-size: 1rem;
    transition: all .2s ease;
    margin: 0 1rem;

    &:hover{
        opacity: .85;
        cursor: pointer;
    }

    &:active{
        transform: scale(.98);
    }

`
