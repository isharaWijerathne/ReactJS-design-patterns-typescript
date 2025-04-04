import WithAuth from "./WithAuth"

function UserSetting() {
  return (
    <>
         <p className="text-center m-5 text-3xl font-bold">User setting Page</p>
    </>
  )
}
const AUTH_USERSETTING = WithAuth(UserSetting)
export default AUTH_USERSETTING