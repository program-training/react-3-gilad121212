
type mishen = {
    title: number,
    completed: boolean
  }

export default function Todo(m:mishen){
    return(
        <ul>
         <li>{m.title} {m.completed}</li>
         </ul>
         )
}


