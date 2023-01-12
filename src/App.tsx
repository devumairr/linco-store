import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Routes from './routes/Routes'
import UserContainer from './context/UserContext'
import { SnackbarMessage } from './components/core/SnackbarMessage'
import { MessageContainer } from './context/MessageContext'

export default function App(): JSX.Element {
    return (
        <HelmetProvider>
            <MessageContainer>
                <BrowserRouter>
                    <UserContainer>
                        <Routes />
                    </UserContainer>
                </BrowserRouter>
                <SnackbarMessage />
            </MessageContainer>
        </HelmetProvider>
    )
}
