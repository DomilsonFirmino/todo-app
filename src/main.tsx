import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TodoContextProvider from './contexts/TodoContextProvider.tsx'
import ThemContextProvider from './contexts/ThemContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoContextProvider>
      <ThemContextProvider>
        <App />
      </ThemContextProvider>
    </TodoContextProvider>
  </StrictMode>,
)
