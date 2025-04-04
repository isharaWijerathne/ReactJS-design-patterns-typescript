import { useNavigate } from "react-router";
import WithAuth from "./WithAuth"


function ProfileHoc() {
  const navigater = useNavigate();
  const LogOutBtn = () :void =>{
    localStorage.removeItem("auth-react-hoc");
    navigater("/higher-order-components/log")
  }
  
  return (
    <div>
        <p className="text-center m-5 text-3xl font-bold">Profile Page</p>
        <center>
        <button onClick={LogOutBtn}  className="m-1 p-1 px-5 bg-red-500 hover:bg-red-300 text-white rounded">LogOut</button>
        </center>
    </div>
  )
}
const AUTH_PROFILE = WithAuth(ProfileHoc)
export default AUTH_PROFILE


