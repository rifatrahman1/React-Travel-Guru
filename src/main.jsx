import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Route.jsx'
import Auth from './Firebase/Auth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth><RouterProvider router={router}>
      </RouterProvider></Auth>
  </StrictMode>,
)
