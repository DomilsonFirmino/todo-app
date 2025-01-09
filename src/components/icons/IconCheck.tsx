export default function IconCheck({fill="#FFF",width=11,strokeWidth=2}:{fill?:string,width?:number,strokeWidth?:number}) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg" 
        width={width} 
        height={width - 3}>
        <path 
            fill="none" 
            stroke={fill}
            stroke-width={strokeWidth}
            d="M1 4.304L3.696 7l6-6"/>
    </svg>
  )
}
