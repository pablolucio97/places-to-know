import App from './App'
import ReactDOM from 'react-dom'
import React from 'react'
import {ModalContextProvider} from './contexts/ModalContext/ModalContext'

ReactDOM.render(
    <React.StrictMode>
        <ModalContextProvider>
            <App/>
        </ModalContextProvider>
    </React.StrictMode>
    , document.getElementById('root')
)