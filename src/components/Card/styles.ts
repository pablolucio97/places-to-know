import styled from 'styled-components'


export const CardContainer = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    box-shadow: 0px 0px 5px 0px #333;
    border-radius: 7px;

    &:hover{
        opacity: .95;
    }
`

export const TopContainer = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: .4rem;
`

export const ButtonsContainer = styled.div`
    width: 72px;
    display: flex;
`

export const CountryInfoContainer = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
`

export const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 1rem;
`


export const Divider = styled.div`
    width: 90%;
    height: 1px;
    background: #999;
    margin: 1rem auto;
`

export const EditButton = styled.button`
    width: 24px;
    height: 24px;
    padding: 4px;
    margin: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CloseButton = styled.button`
    width: 24px;
    height: 24px;
    padding: 4px;
    margin: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CountryTitle = styled.strong`
    font-weight: bold;
    color: #4F9419;
    margin: .2rem;
    text-transform: uppercase;
`

export const Text = styled.span`
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    margin: 1rem .2rem;
`

export const ImageFlag = styled.img`
    width: 56px;
    height: 34px;
    margin: .2rem;
`