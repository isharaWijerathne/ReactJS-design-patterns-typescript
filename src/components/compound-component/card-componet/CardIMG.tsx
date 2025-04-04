import { FC } from "react"

interface ICardIMG {
    URL :string,
    alt : string
}

const CardIMG : FC<ICardIMG> = ({URL,alt}) =>{
  return (
    <>
        <div className=" flex justify-center my-4 ">
                <img className="w-50 rounded-[100%]" src={URL} alt={alt} />
        </div>

    </>
  )
}

export default CardIMG