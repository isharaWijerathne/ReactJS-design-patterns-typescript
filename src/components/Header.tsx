import { Link } from "react-router"


function Header() {
  return (
    <>
    <div className="w-full h-16 bg-blue-500">
        <ul className="flex h-16 items-center justify-center gap-1">
          <li className="flex items-center justify-center h-12 w-48 bg-teal-500 hover:bg-teal-300 rounded-xl ">
            <Link to="/container-presentaion" className="text-white text-center font-bold text-[14px]">Container Presentaion Pattren</Link>
          </li>

          <li className="flex items-center justify-center h-12 w-48 bg-teal-500 hover:bg-teal-300 rounded-xl ">
            <p className="text-white text-center font-bold text-[14px]">HOC</p>
          </li>

          <li className="flex items-center justify-center h-12 w-48 bg-teal-500 hover:bg-teal-300 rounded-xl ">
            <p className="text-white text-center font-bold text-[14px]">Compount Component</p>
          </li>

          <li className="flex items-center justify-center h-12 w-48 bg-teal-500 hover:bg-teal-300 rounded-xl ">
            <p className="text-white text-center font-bold text-[14px]">Custom Hooks</p>
          </li>

          <li className="flex items-center justify-center h-12 w-48 bg-teal-500 hover:bg-teal-300 rounded-xl ">
            <p className="text-white text-center font-bold text-[14px]">State Reducer Pattern</p>
          </li>

          <li className="flex items-center justify-center h-12 w-48 bg-teal-500 hover:bg-teal-300 rounded-xl ">
            <p className="text-white text-center font-bold text-[14px]">Context API</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header