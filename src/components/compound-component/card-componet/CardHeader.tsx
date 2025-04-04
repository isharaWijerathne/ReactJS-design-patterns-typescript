import { FC } from "react"

interface ICardHeader {
    mainHeader : string,
    subHeader : string,
}

const CardHeader : FC<ICardHeader> = ({mainHeader,subHeader}) => {
  return (
    <>
        <div>
            <p className="text-center my-2 text-red-400 font-bold text-[18px]">{mainHeader}</p>
            <p className="text-center my-1 text-teal-400-  text-[10px]">{subHeader}</p>
        </div>
    </>
  )
}

export default CardHeader