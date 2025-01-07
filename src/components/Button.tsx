import { ReactNode } from "react";
import { ButtonType } from "../@types/types";

export default function Button({type,children, handleClick, disabled=false}:{type?:ButtonType,children: ReactNode, handleClick?: ()=>void, disabled?: boolean}) {
  return (
    <button disabled={disabled} type={type} onClick={handleClick} className="text-gray-50 hover:text-blue-700 disabled:text-gray-500">{children}</button>
  )
}
