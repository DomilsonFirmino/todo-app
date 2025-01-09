import { ReactNode } from "react";
import { ButtonType } from "../@types/types";

export default function Button({type,children, handleClick, disabled=false,styles}:{type?:ButtonType,children: ReactNode, handleClick?: ()=>void, disabled?: boolean,styles?:string}) {
  return (
    <button disabled={disabled} type={type} onClick={handleClick} className={`text-gray-50 dark:text-gray-700 dark:hover:text-gray-400 hover:text-blue-700 disabled:text-gray-500 ${styles}`}>
      {children}
    </button>
  )
}
