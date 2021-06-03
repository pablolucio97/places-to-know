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
    id,
    local,
    countryName,
    countryFlag,
    goalDate,
    openModalDelete,
    openModalEdit
} : countryCardTypes) => {
    return (
            <CardContainer key={id}>
                <TopContainer>
                    <CountryInfoContainer>
                        <ImageFlag src={countryFlag} />
                        <CountryTitle>{countryName}</CountryTitle>
                    </CountryInfoContainer>
                    <ButtonsContainer>
                        <EditButton onClick={openModalEdit}>
                            <MdEdit size={18} color='#333'/>
                        </EditButton>
                        <CloseButton onClick={openModalDelete}>
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
    )
}

export default Card
