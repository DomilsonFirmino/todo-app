import { FormEvent, ReactNode } from "react";

export default function Form({children, handleSubmit}:{children: ReactNode, handleSubmit: (e: FormEvent<HTMLFormElement>)=>void}) {
  return (
    <form onSubmit={handleSubmit}>
        {children}
    </form>
  )
}
