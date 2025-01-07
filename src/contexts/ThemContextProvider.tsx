import { ReactNode, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { ThemeType } from '../@types/types';

export default function ThemContextProvider({children}:{children: ReactNode}) {
  const [theme, setTheme] = useState<ThemeType>("light");
  function handleChangeTheme(){
    setTheme(theme == "dark" ? "light": "dark")
  }
  return (
    <ThemeContext.Provider value={{theme, handleChangeTheme}}>{children}</ThemeContext.Provider>
  )
}
