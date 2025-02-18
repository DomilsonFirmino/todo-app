import { TodoType } from "../@types/types";
import Button from "./Button";
import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

export default function TodoComponent({styles,handleDrop,Todo,handleCheck, handleDelete}:{Todo:TodoType, handleCheck: ()=> void,styles?: string, handleDelete: ()=> void, handleDrop: (e: React.DragEvent<HTMLDivElement>) =>void}) {
  return (
    <div 
      className={`cursor-grab flex justify-between items-center gap-4 p-4 ${styles} Todo`}
      draggable
      onDragStart={(e)=>{
        e.dataTransfer.setData("dragStart",(Todo.id as unknown as string))
      }}
      onDragOver={(e)=>{
        e.preventDefault();
      }}
      onDrop={(e)=>handleDrop(e)}
    >
      <div className={`flex gap-4 items-center`}>
        
        <button onClick={handleCheck}>
          {Todo.status=="active" ? 
          <div className="w-5 aspect-square rounded-full border-2 border-gray-700 dark:border-gray-300"></div>
          :
          <div className="w-5 aspect-square rounded-full bg-blue-700 grid place-content-center">
            <IconCheck />
          </div>
          }
        </button>

        <p className={`break-all text-gray-50 dark:text-gray-700 font-semibold ${Todo.status === "completed" && "line-through"}`}>{Todo.description}</p>

      </div>

      <Button handleClick={handleDelete} styles="text-gray-400">
        <IconCross />
      </Button>
    </div>
  )
}
