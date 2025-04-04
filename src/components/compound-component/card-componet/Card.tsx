import { FC, ReactNode } from "react"

interface ICard {
    children: ReactNode
}

const Card : FC<ICard> = ({children})  => {
  return (
    <>
        <div className=" relative m-2 p-2 bg-blue-50 w-[300px] shadow-2xl rounded ">
            {children}
        </div>
    </>
  )
}

export default Card