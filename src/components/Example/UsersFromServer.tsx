/*import { useState ,useEffect } from "react";
import UserCard from "./UserCard";
type data ={
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    }
}
type da = 
{
    userId: number,
    id: number,
    title: number,
    completed: boolean
  }

export default  function UsersFromServe(){
    const [user,data1] = useState<data[]>()
    useEffect(() => {
        const data = async () =>{
            let data = await fetch("https://jsonplaceholder.typicode.com/users" )
            let Jdata = await data.json()
            console.log(Jdata)
            data1(Jdata)
         
        }
        data()
    },[])
    const [us,da] = useState<da[]>()
    useEffect(() => {
        const data3 = async () =>{
            let data = await fetch("https://jsonplaceholder.typicode.com/todos")
            let Jdata = await data.json()
            console.log(Jdata)
            da(us)
         
        }
        data3()
    },[])
        if (user){
        
    return (user).map((us)=><UserCard name = {us.name} email={us.email}></UserCard> )
        }else {
            console.log("not valid")
        }
    }
    */
    import UserCard from "./UserCard";
type data = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    }
}
import { useState, useEffect } from "react";

export default function UsersFromServe() {
    const [user, data1] = useState<data[]>()
    useEffect(() => {
        const data = async () => {
            let data = await fetch("https://jsonplaceholder.typicode.com/users")
            let Jdata = await data.json()
           // console.log(Jdata)
            data1(Jdata)
        }
        data()
    },[])
    if (user)
    return(
        user.map((us)=> <UserCard key={us.id} name={us.name} email={us.email} id={us.id} />)
    )
}



