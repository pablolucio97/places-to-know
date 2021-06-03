type countryCardTypes = {
    id: number;
    countryName: string;
    countryFlag: string;
    local: string;
    goalDate: string;
    deleteCard?: () => void;
    editCard?: () => void;
    openModalDelete?: () => void;
    openModalEdit?: () => void;
}

export default countryCardTypes