import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

function WithAuth(Component :any) {

  const WithAuthWrapper = (props : any) =>{

    const [isAuth,setAuth] = useState<boolean>(false);

    const navigater = useNavigate();

    const NavToLoging  = ():void => {
        
        	navigater("/higher-order-components/log")
    }

    useEffect(()=>{
        let token = localStorage.getItem("auth-react-hoc");

        if(token == "654321"){
            setAuth(true);
        }
    },[])

      return <>
          {isAuth? <Component {...props} /> : 
            <div>
              <p className="text-center m-5 font-bold">Invalid User</p>
              <div className="flex justify-center">
                  <button onClick={NavToLoging} className="text-pink-600">Login Now</button>
              </div>
            </div>
          }
      </>
  
    
  }

  return WithAuthWrapper
}

export default WithAuth