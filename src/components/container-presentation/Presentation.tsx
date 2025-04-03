import { useRef } from "react";


interface IPresentation {
    userList : string[],
    AddUser(name : string) : void,
    RemoveUser( index : number) : void
}

function Presentation(props:IPresentation) {

   const inputRef = useRef<HTMLInputElement | null>(null);

   //presentation logic
   const addNameBtn =  () :void =>{
      if(inputRef.current?.value == ""){
        alert("Empty Input")
      }else{
        props.AddUser(inputRef.current?.value)
         inputRef.current.value = ""
      }
   }
  return <center>
      <div>
        <input className=" border-2 m-2" type="text" ref={inputRef} />
        <button className=" bg-amber-400 m-1 p-1 rounded text-white font-bold" onClick={ addNameBtn }>Add Name</button>
      </div>
      <div>
        { props.userList.map( (value,index) =>{
          return <div key={index} className="">
           <div>
              <span className="m-1 p-2">{value}</span>
              <button className="bg-red-400 m-1 p-1 rounded text-white font-bold" onClick={ () =>{ props.RemoveUser(index) }} >Remove</button>
           </div>
          </div>
        }) }
      </div>
  </center>
}

export default Presentation

