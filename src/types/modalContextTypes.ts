export type ModalContextTypes = {
    openedModalEdit: boolean;
    openedModalDelete: boolean;
    openModalEdit: () => void;
    closeModalEdit: () => void;
    openModalDelete: () => void;
    closeModalDelete: () => void;
}