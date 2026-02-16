import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './styles/globals.css'
import App from './App.tsx'
import { DocsLayout } from './layouts/docs-layout.tsx'
import { ComponentDocPage } from './pages/docs/components/component-doc-page.tsx'
import { FontsPage } from './pages/docs/fonts-page.tsx'
import { GetStartedPage } from './pages/docs/get-started-page.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/why',
    element: <App />,
  },
  {
    path: '/docs',
    element: <DocsLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/docs/get-started" replace />,
      },
      {
        path: 'get-started',
        element: <GetStartedPage />,
      },
      {
        path: 'fonts',
        element: <FontsPage />,
      },
      {
        path: 'components',
        element: <Navigate to="/docs/components/button" replace />,
      },
      {
        path: 'components/:slug',
        element: <ComponentDocPage />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </StrictMode>,
)
