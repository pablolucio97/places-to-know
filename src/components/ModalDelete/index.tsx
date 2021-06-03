import { ModalContainer, Title, Button, Span } from './styles'
import { ModalDeleteTypes } from '../../types/modalDeleteTypes'
import Modal from 'react-modal'


const ModalDelete = ({ closeModalDelete, deleteCard, modalStatus}: ModalDeleteTypes) => {

    return (
        <>
            <Modal
                isOpen={modalStatus}
                onRequestClose={closeModalDelete}
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        background: '#ddd',
                        color: '#ddd',
                        borderRadius: '2px',
                        width: '360px',
                        height: '280px',
                        border: 'none',
                    },
                    overlay: {
                        backgroundColor: '#111214e6',
                    },
                }}
            >
                <ModalContainer >
                    <Title>Deletar item</Title>
                    <Span>Tem certeza que deseja deletar esse destino?</Span>
                    <Button
                        color='#4F9419'
                        hovering='#6cbd44'
                        onClick={deleteCard}
                    >
                        Sim, deletar
            </Button>
                    <Button
                        onClick={closeModalDelete}
                        color='#94194e'
                        hovering='#b0275b'
                    >
                        Cancelar
            </Button>
                </ModalContainer>
            </Modal>
        </>
    )
}

export default ModalDelete
