import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { ToastMessageProvider } from 'contexts/ToastContext'
import { createRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

const container = document.querySelector('#root')
const queryClient = new QueryClient()

if (container)
  createRoot(container).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ToastMessageProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ToastMessageProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
