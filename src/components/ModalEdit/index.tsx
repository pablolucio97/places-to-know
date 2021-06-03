import { ModalContainer, Input, Title, Button, Span } from './styles'
import {ModalEditTypes} from '../../types/modalEditTypes'
import InputMask from 'react-input-mask'
import Modal from 'react-modal'

const ModalEdit = ({closeModalEdit, editCard, modalStatus, updateMeta, updateLocal} : ModalEditTypes) => {
    return (
        <Modal
        isOpen={modalStatus}
        onRequestClose={editCard}
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
                height: '360px',
                border: 'none',
            },
            overlay: {
                backgroundColor: '#111214e6',
            },
        }}
    >
        <ModalContainer>
            <Title>Editar item</Title>
            <Span>Meta</Span>
            <Input
                placeholder='Edite o local'
                onChange={updateLocal}
            />
            <Span>Local</Span>
            <InputMask
              style={{
                borderRadius: 7,
                paddingLeft: 8,
                border: 'none',
                height: 32,
                width: 240,
              }}
              mask='99/2029'
              placeholder='mês/ano'
              onChange={updateMeta}

            />
               <Button
                color='#4F9419'
                hovering='#6cbd44'
                onClick={editCard}
            >
                Concluir edição
            </Button>
            <Button
                onClick={closeModalEdit}
                color='#94194e'
                hovering='#b0275b'
            >
                Cancelar
            </Button>
        </ModalContainer>
        </Modal>
    )
}

export default ModalEdit
