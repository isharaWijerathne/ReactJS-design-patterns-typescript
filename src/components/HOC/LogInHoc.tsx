import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

function LogInHoc() {

    const userNameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const navigater = useNavigate()

    const LogInFunc = ():void =>{

        //validation
        if(
            userNameRef.current?.value == "" ||
            passwordRef.current?.value == ""
        ){
            
            alert("Invalid Inputs")
            userNameRef.current.value = "";
            passwordRef.current.value = "";
        }

        //check auth
        if(
             userNameRef.current?.value == "lvReact" ||
            passwordRef.current?.value == "123456"
        ){
            //toke store
            localStorage.setItem('auth-react-hoc',"654321");
            navigater("/higher-order-components/profile")
        }
    }

    //check toke
    useEffect(()=>{
        let token = localStorage.getItem("auth-react-hoc");

        if(token == "654321"){
            navigater("/higher-order-components/profile") 
        }
    },[])
  return (
    <>
      <div className="flex justify-center flex-col h-[150px] items-center  mt-5">
       
          <input
            className="  block border p-2 rounded m-2"
            placeholder="UserName"
            type="text"
            ref={userNameRef}
          />
          <input
            className=" block border p-2 rounded m-2"
            placeholder="Password"
            type="password"
            ref={passwordRef}
          />

          <div className="flex flex-col items-center justify-center">
            <p className="text-blue-300 text-[10px]">Hint ! username :lvReact password:123456</p>
            <button onClick={LogInFunc} className="m-1 p-1 px-5 bg-green-500 hover:bg-green-300 text-white rounded">Login</button>
          </div>
        </div>
      
    </>
  );
}

export default LogInHoc