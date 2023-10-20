import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Register from './pages/register'

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <div>404 Not found</div>,
        children: [
            { index: true, element: <Home /> },
            {
                path: 'contact',
                element: <div>Contact Page</div>,
            },
            {
                path: 'book',
                element: <div>Book Page</div>,
            },
        ],
    },
    {
        path: 'login',
        element: <div>Login page</div>,
    },
    {
        path: 'register',
        element: <Register />,
    },
])
function App() {
    return (
        <div className='App'>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
