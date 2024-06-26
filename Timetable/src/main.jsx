import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import ErrorPage from './Pages/error-page.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App page="home"/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/settings",
    element: <App page="settings" />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
