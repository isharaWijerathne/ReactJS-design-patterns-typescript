import { FC } from "react"

interface ICardPrice {
    price : number,
    status : string
}

const CardPrice : FC<ICardPrice> = ({price,status}) => {
  return (
    <>
    <div className="mx-3 mt-3">
                <p className="text-[12px] font-semibold ">USD {price}</p>
                <p className="text-[10px] text-slate-600">{status}</p>
    </div>
    </>
  )
}

export default CardPrice