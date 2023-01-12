import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import { IUserContext, UserContext } from '../context/UserContext'

interface IPrivateRoute {
    component: ReactNode
    navLink: string
}

const PrivateRoute = ({
    component: Component,
    navLink,
    ...rest
}: IPrivateRoute): ReactNode => {
    const { data } = useContext(UserContext) as IUserContext

    if (data.user) {
        return Component ? (
            <Component {...rest} />
        ) : (
            <Navigate to={navLink} replace />
        )
    }
    if (data.isLoading) {
        return <Loader />
    }

    return <Navigate to="/" replace />
}

export default PrivateRoute
