import { useState, useEffect } from "react";
type data = {
    id: number,
    name: string,
    email: string
}
type mishen = {
    userId: number,
    id: number,
    title: number,
    completed: boolean
}
import Todo from "./TodoList";
export default function UserCard(users: data) {
    const [flage, boolean] = useState<boolean>(false)
    const [user, data1] = useState<mishen[]>()
    function f(id: number) {
        useEffect(() => {
            const data = async () => {
                let data = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
                let Jdata = await data.json()
                Jdata.splice(5, 20)
                data1(Jdata)
                console.log(user)
            }
            data()

        }, [])
    }
    f(users.id)
    return (
        <div id="gilad">

            <h1>{users.name}</h1>
            <p>{users.email}</p>
            <button onClick={() => {
                if (flage) {
                    boolean(false)
                } else {
                    boolean(true)
                }

            }}>click</button>
            {flage && user?.map((e) => <Todo title={e.title} completed={e.completed} />)}
        </div>

    )

}




