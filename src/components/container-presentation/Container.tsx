import { useState } from "react"
import Presentation from "./Presentation"

function Container() {

   

    const [userList,setUserList] = useState<string[]>(["apple","banana"])

    const AddUser  = (new_name : string) : void =>{
        setUserList( (previousList =>{
            return [...previousList,new_name]
        }) )
    }

    const RemoveUser = (inputIndex :number) : void =>{
        
      setUserList( previosList =>{
        let newArray = previosList.filter( (value,index) => index !=inputIndex)
        return newArray
      })
    }

  return (
    <>
        <Presentation userList={userList} AddUser={AddUser} RemoveUser={RemoveUser} />
    </>
  )
}

export default Container