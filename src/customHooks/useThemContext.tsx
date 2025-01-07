import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function useThemContext() {
  const context = useContext(ThemeContext)
  if(!context)
    throw new Error("seta o thema")
  return context
}
