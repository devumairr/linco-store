import * as React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Home from '../pages/home/Home'
import Blog from '../pages/blog/Blog'
import Checkout from '../pages/checkout/Checkout'
import NotFound from '../pages/NotFound/NotFound'
import MainLayout from '../Layouts/MainLayout'
import PrivateRoute from './PrivateRoute'
import Categories from '../pages/categories/Categories'
import Cart from '../pages/cart/Cart'
import About from '../pages/about/About'

export default function Routes(): ReactNode {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/about', element: <About /> },
                { path: '/blog', element: <Blog /> },
                { path: '/categories', element: <Categories /> },
                { path: '/cart', element: <Cart /> },
                { path: '/checkout', element: <Checkout /> },
            ],
        },
        { path: '404', element: <NotFound /> },
        {
            path: '/login',
            element: <Login />,
        },

        {
            path: '*',
            element: <Navigate to="/404" />,
        },
    ])
}
