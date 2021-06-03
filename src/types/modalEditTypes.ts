import { ChangeEvent } from 'react';
export type ModalEditTypes = {
    closeModalEdit: () => void;
    editCard?: () => void;
    modalStatus: boolean;
    updateMeta: (e: ChangeEvent<HTMLInputElement>) => void;
    updateLocal: (e: ChangeEvent<HTMLInputElement>) => void;
}