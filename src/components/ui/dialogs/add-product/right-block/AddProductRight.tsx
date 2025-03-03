import { useState } from "react"
import Field from "../../../../ui/fields/Field"
import locker_img from "../../../../../assets/imgs/actions/locker_green.svg"
import "./right-block.scss"


function AddProductRightForm() {

  const [article, setArticle] = useState("")

  return (
    <div className="dialog__right">
      <div className="right__locker">
        <img className="right__locker-img" src={locker_img} alt="" />
      </div>
      <div className="right__content">
        <div className="right__content-article"><Field heading="Артикул" placeholder="Артикул" value={article} setValue={setArticle} /></div>
        <div className="right__content-color"><Field heading="Цвет" placeholder="Цвет" value={article} setValue={setArticle} /></div>
        <div className="right__content-price"><Field heading="Цена покупки" placeholder="10" value={article} setValue={setArticle} /></div>
        <div className="right__content-price"><Field heading="Цена доставки" placeholder="10" value={article} setValue={setArticle} /></div>
        <div className="right__content-currency"><Field heading="Валюта" placeholder="$" value={article} setValue={setArticle} /></div>
        <div className="right__content-brand"><Field heading="Бренд" placeholder="Adidas" value={article} setValue={setArticle} /></div>
        <div className="right__content-size"><Field heading="Размер" placeholder="10 US" value={article} setValue={setArticle} /></div>
      </div>
    </div>
  )
}

export default AddProductRightForm