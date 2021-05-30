import {
    CardContainer,
    CloseButton,
    EditButton,
    ImageFlag,
    Text,
    CountryTitle,
    BottomContainer,
    ButtonsContainer,
    Divider,
    TopContainer,
    CountryInfoContainer
} from './styles'

import {MdClose, MdEdit} from 'react-icons/md'
import flag from '../../assets/flag.svg'

export default function Card() {
    return (
        <>
            <CardContainer>
                <TopContainer>
                    <CountryInfoContainer>
                        <ImageFlag src={flag} />
                        <CountryTitle>BRAZIL</CountryTitle>
                    </CountryInfoContainer>
                    <ButtonsContainer>
                        <EditButton><MdEdit size={18} color='#333'/></EditButton>
                        <CloseButton><MdClose size={18} color='#333'/></CloseButton>
                    </ButtonsContainer>
                </TopContainer>
                <Divider />
                <BottomContainer>
                    <Text>Local:</Text>
                    <Text>Meta:</Text>
                </BottomContainer>
            </CardContainer>
        </>
    )
}
