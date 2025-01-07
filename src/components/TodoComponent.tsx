import { TodoType } from "../@types/types";

export default function TodoComponent({styles,Todo, handleCheck, handleDelete}:{Todo:TodoType, handleCheck: ()=> void,styles?: string, handleDelete: ()=> void}) {
  return (
    <div key={Todo.id} className={`flex justify-between p-4 ${styles} Todo`}>
      <div className={`flex gap-4 items-center`}>
        <button onClick={handleCheck}>
          
          {Todo.status=="active" ? 
          <div className="w-4 aspect-square rounded-full border-2 border-blue-700"></div>
          :
          <div className="w-4 aspect-square rounded-full bg-blue-700"></div>}
        </button>
        <p className={` text-gray-50 font-semibold ${Todo.status === "completed" && "line-through"}`}>{Todo.description}</p>
      </div>

      <button onClick={handleDelete} className="text-gray-400">
        X
      </button>
    </div>
  )
}
