import { ReactNode, useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { ThemeType } from '../@types/types';

export default function ThemeContextProvider({children}:{children: ReactNode}) {
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(()=>{
    const themeSalvo:ThemeType|null = localStorage.getItem("theme") as ThemeType;
    if(themeSalvo){
      setTheme(themeSalvo)
    }else{
      localStorage.setItem("theme","light")
    }  
  },[])

  useEffect(() => {
    if (theme == "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  function handleChangeTheme(){
    localStorage.setItem('theme',theme == "dark" ? "light": "dark")
    setTheme(theme == "dark" ? "light": "dark")
  }
  return (
    <ThemeContext.Provider value={{theme, handleChangeTheme}}>{children}</ThemeContext.Provider>
  )
}
