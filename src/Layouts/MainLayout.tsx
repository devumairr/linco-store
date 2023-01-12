import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './NavBar'

export default function MainLayout(): ReactNode {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}
