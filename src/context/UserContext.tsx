import React, { useState } from 'react'

export const UserContext = React.createContext({})
export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export interface IUserContainer {
    children: ReactNode[] | ReactNode
}

export interface IUserContext {
    data: IUserData
    setUserData: (user: IUser) => void
}

export interface IUserData {
    isLoading: boolean
    user: IUser | null
}

export function UserContainer({ children }: IUserContainer): ReactNode {
    const [data, setData] = useState<IUserData>({
        isLoading: true,
        user: null,
    })

    const setUserData = (user: IUser): void => {
        setData({ isLoading: false, user })
    }

    return (
        <UserProvider
            value={{
                data,
                setUserData,
            }}
        >
            {children}
        </UserProvider>
    )
}

export default UserContainer
