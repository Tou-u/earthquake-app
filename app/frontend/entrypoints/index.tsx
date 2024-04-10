import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'

// Pages
import Layout from '../components/Layout.tsx'
import NotFound from '../pages/NotFound.tsx'
import Home, { loadFeatures } from '../pages/Home.tsx'
import Feature, { loadComments, createComment } from '../pages/Feature.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: loadFeatures,
      },
      {
        path: 'features/:id',
        element: <Feature />,
        loader: loadComments,
        action: createComment,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
)
