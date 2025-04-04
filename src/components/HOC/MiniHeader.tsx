import { Link } from "react-router"


function MiniHeader() {
  return (
    <>
        <div className="flex justify-center">
            <Link to="/higher-order-components/log" className="bg-blue-500 hover:bg-blue-300 m-1 p-2 text-white rounded">Login Page</Link>
            <Link to="/higher-order-components/profile" className="bg-orange-400  hover:bg-orange-300 m-1 p-2 text-white rounded">Profile Page</Link>
            <Link to="/higher-order-components/user-setting" className="bg-pink-400  hover:bg-pink-300 m-1 p-2 text-white rounded">User Setting Page</Link>
        </div>
    </>
  )
}

export default MiniHeader