import { Outlet } from "react-router"
import MiniHeader from "../components/HOC/MiniHeader"


function HigherOrderComponents() {
  return (
    <>
         <h1 className="text-center m-8 text-emerald-600 font-extrabold text-[25px]">Higher Order Components</h1>
         <MiniHeader />
         <Outlet/>
    </>
  )
}

export default HigherOrderComponents