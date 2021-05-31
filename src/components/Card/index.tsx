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

import countryCardTypes from '../../types/countryCardsTypes'

const Card = ({
    local,
    countryName,
    countryFlag,
    goalDate,
    editCard,
    deleteCard
} : countryCardTypes) => {
    return (
        <>
            <CardContainer>
                <TopContainer>
                    <CountryInfoContainer>
                        <ImageFlag src={countryFlag} />
                        <CountryTitle>{countryName}</CountryTitle>
                    </CountryInfoContainer>
                    <ButtonsContainer>
                        <EditButton onClick={editCard}>
                            <MdEdit size={18} color='#333'/>
                        </EditButton>
                        <CloseButton onClick={deleteCard}>
                            <MdClose size={18} color='#333'/>
                        </CloseButton>
                    </ButtonsContainer>
                </TopContainer>
                <Divider />
                <BottomContainer>
                    <Text>Local: {local}</Text>
                    <Text>Meta: {goalDate}</Text>
                </BottomContainer>
            </CardContainer>
        </>
    )
}

export default Card
