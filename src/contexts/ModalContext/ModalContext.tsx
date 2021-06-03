import { ReactNode, useState, createContext, useContext } from 'react'
import {ModalContextTypes} from '../../types/modalContextTypes'

type ChildrenProps ={
    children: ReactNode
}

export const ModalContext = createContext<ModalContextTypes>({} as ModalContextTypes)

export function ModalContextProvider ({children} : ChildrenProps) {

    const [openedModalEdit, setOpenedModalEdit] = useState<boolean>(false)
    const [openedModalDelete, setOpenedModalDelete] = useState<boolean>(false)


    function openModalEdit(){
        setOpenedModalEdit(true)
    }

    function closeModalEdit(){
        setOpenedModalEdit(false)
        
    }

    function openModalDelete(){
        setOpenedModalDelete(true)
    }
    function closeModalDelete(){
        setOpenedModalDelete(false)
        console.log('ok')
    }


    return (
        <ModalContext.Provider value={{
            openedModalEdit,
            openedModalDelete,
            openModalDelete,
            openModalEdit,
            closeModalDelete,
            closeModalEdit,
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    const {
        closeModalDelete,
        closeModalEdit,
        openModalEdit,
        openedModalEdit,
        openModalDelete,
        openedModalDelete
} = useContext(ModalContext)
    return [
        closeModalDelete,
        closeModalEdit,
        openModalDelete,
        openModalEdit,
        openedModalDelete,
        openedModalEdit
]
}