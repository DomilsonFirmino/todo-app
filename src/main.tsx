import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TodoContextProvider from './contexts/TodoContextProvider.tsx'
import ThemeContextProvider from './contexts/ThemeContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </TodoContextProvider>
  </StrictMode>,
)
