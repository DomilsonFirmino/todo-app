export default function InputComponent({styles, type="text", name, id,state,handleChange}:{styles?:string, type?: string,name: string, id: string,state: string,handleChange: (e: React.ChangeEvent<HTMLInputElement>)=>void}) {
  return (
    <div>
      <div className={`grid ${styles}`}>
        <input type={type} name={name} id={id} onChange={handleChange} value={state} className="p-2 rounded-md overflow-hidden"/>
      </div>
    </div>
  )
}