import React, { useState } from 'react'

export const MessageContext = React.createContext({})

export const MessageConsumer = MessageContext.Consumer
export const MessageProvider = MessageContext.Provider

export interface IMessageContainer {
    children: ReactNode[] | ReactNode
}

export interface IMessageContext {
    snackbarState: {
        isSnackbarVisible: boolean
        snackBarMessage: string
        isError: boolean
        duration: number
    }
    showSnackbar: (
        message: string,
        isError?: boolean,
        duration?: number
    ) => void
    hideSnackbar: () => void
}

export const MessageContainer = ({
    children,
}: IMessageContainer): ReactNode => {
    const [snackbarState, setSnackbarState] = useState({
        isSnackbarVisible: false,
        snackBarMessage: '',
        isError: false,
        duration: 3000,
    })

    const showSnackbar = (
        message: string,
        isError = false,
        duration = 3000
    ): void => {
        setSnackbarState({
            isSnackbarVisible: true,
            snackBarMessage: message,
            isError,
            duration,
        })
    }

    const hideSnackbar = (): void => {
        setSnackbarState({
            ...snackbarState,
            isSnackbarVisible: false,
            snackBarMessage: '',
            isError: false,
        })
    }

    return (
        <MessageProvider
            value={{
                snackbarState,
                hideSnackbar,
                showSnackbar,
            }}
        >
            {children}
        </MessageProvider>
    )
}
