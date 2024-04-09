import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from '../components/App'
import Comments from '../components/Comments'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/comments/:id',
    element: <Comments />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className='dark text-foreground bg-background'>
        <RouterProvider router={router} />
      </main>
    </NextUIProvider>
  </React.StrictMode>
)
