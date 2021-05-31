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

type CardProps = {
    local: string;
    metaDate: string;
    countryName: string;
    countryFlag?: string;
}

const Card = ({local, countryName, countryFlag, metaDate} : CardProps) => {
    return (
        <>
            <CardContainer>
                <TopContainer>
                    <CountryInfoContainer>
                        <ImageFlag src={countryFlag} />
                        <CountryTitle>{countryName}</CountryTitle>
                    </CountryInfoContainer>
                    <ButtonsContainer>
                        <EditButton><MdEdit size={18} color='#333'/></EditButton>
                        <CloseButton><MdClose size={18} color='#333'/></CloseButton>
                    </ButtonsContainer>
                </TopContainer>
                <Divider />
                <BottomContainer>
                    <Text>Local: {local}</Text>
                    <Text>Meta: {metaDate}</Text>
                </BottomContainer>
            </CardContainer>
        </>
    )
}

export default Card
