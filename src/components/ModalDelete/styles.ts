import styled from "styled-components";

type ButtonProps = {
  color: string;
  hovering: string;
}

export const ModalContainer = styled.div`
  width: 320px;
  height: 240px;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #333;
  border-radius: 7px;
`;

export const Title = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  color: #fff;
`;


export const Button  = styled.button<ButtonProps>`
  width: 240px;
  border-radius: 7px;
  height: 40px;
  padding: 4px;
  border: none;
  background: ${props => props.color};
  color: #fff;
  transition: all .2s ease;

    &:hover{
        background: ${props => props.hovering};
        cursor: pointer;
    }

    &:active{
        transform: scale(.98)
    }

`;

export const Span = styled.span`
    color: #fff;
    font-size: .8rem;
`
