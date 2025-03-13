import { useState } from "react"
import Field from "../../ui/fields/Field"
import locker_img from "../../../assets/imgs/actions/locker_green.svg"
import "./right-block.scss"
import Checkbox from "../../ui/checkbox/Checkbox"
import SelectField from "../../ui/selects/SelectField"
import { IBrandsSelect } from "../../../types/types"


function AddProductRight() {

  const [article, setArticle] = useState("")
  const [brandsList, setBrandsList] = useState<IBrandsSelect[]>([
    {id: 1, name: "Adidas", selected: true},
    {id: 2, name: "Nike", selected: false},
  ])

  return (
    <div className="dialog__right">
      <div className="right__content">
        <div className="right__locker">
          <img className="right__locker-img" src={locker_img} alt="" />
        </div>
        <div className="right__content-field-xl"><Field heading="Название" placeholder="Название" value={article} setValue={setArticle} /></div>
        <div className="right__content-field-m"><Field heading="Цвет" placeholder="Цвет" value={article} setValue={setArticle} /></div>
        <div className="right__content-field-m"><Field heading="Цена покупки" placeholder="10" value={article} setValue={setArticle} /></div>
        <div className="right__content-field-m"><Field heading="Цена доставки" placeholder="10" value={article} setValue={setArticle} /></div>
        <div className="right__content-field-l"><Field heading="Состояние" placeholder="Выбор" value={article} setValue={setArticle} /></div>
        <div className="right__content-field-m"><Field heading="Размер US" placeholder="10 US" value={article} setValue={setArticle} /></div>
        <div className="right__content-field-m"><Field heading="Размер UK" placeholder="10 UK" value={article} setValue={setArticle} /></div>
        <div className="right__content-field-m"><Field heading="Размер EU" placeholder="10 EU" value={article} setValue={setArticle} /></div>
        <div className="right__content-field-m"><SelectField data={["Adidas", "Nike"]} heading="Бренд" /></div>
        <div className="right__content-field-m"><Field heading="Город" placeholder="Москва" value={article} setValue={setArticle} /></div>
        <div className="right__content-field-l"><Field heading="Место сделки" placeholder="м. Белорусская" value={article} setValue={setArticle} /></div>
        <div className="right__content-checkbox">
          <Checkbox checked={true} setChecked={() => {}} />
          <p>Есть примерка</p>
        </div>
      </div>
    </div>
  )
}

export default AddProductRight