import Card from "./card-componet/Card"
import CardButton from "./card-componet/CardButton"
import CardHeader from "./card-componet/CardHeader"
import CardIMG from "./card-componet/CardIMG"
import CardPreview from "./card-componet/CardPreview"
import CardPrice from "./card-componet/CardPrice"

function CompoundHome() {
  return (
    <>
        

        <div className="grid grid-cols-2">
            <div className="flex flex-col items-center justify-center">
                <p className="m-2">Card with ShopNow button</p>
                <Card>
                    {/* <CardPreview/> */}
                    <CardHeader mainHeader="Ultrarun 5 Running Shoes" subHeader="For Men" />
                    <CardIMG URL="https://static-01.daraz.lk/p/9721529763177d470be998d05d5e656f.jpg" alt="pic" />
                    <CardPrice price={235} status="Sprot" />
                    <CardButton />
                </Card>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="m-2">Preview Card without ShopNow button</p>
                <Card>
                    <CardPreview/>
                    <CardHeader mainHeader="Gazelle Indoor Shoes" subHeader="For Women" />
                    <CardIMG URL="https://img.drz.lazcdn.com/static/lk/p/8424a7a6474eac827e3550597a0dbda4.jpg_720x720q80.jpg" alt="pic" />
                    <CardPrice price={235} status="Sprot" />
                    {/* <CardButton /> */}
                </Card>
            </div>
        </div>
    </>
  )
}

export default CompoundHome