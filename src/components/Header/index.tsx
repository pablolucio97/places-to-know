import {Img, HeaderContainer} from './styles'
import logo from '../../assets/logo.svg'

export default function Header() {
    return (
        <HeaderContainer>
        <Img
            src={logo}
        /> 
        </HeaderContainer>
    )
}
