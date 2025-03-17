import { InfoList } from "../../../../../types/types"
import Property from "../../../../ui/property/Property"
import "./info.scss"
import brand_png from "../../../../../assets/imgs/actions/brand.png"
import date_png from "../../../../../assets/imgs/actions/date.png"
import price_png from "../../../../../assets/imgs/actions/price.png"

function Info({ info }: { info: (string | null)[] }) {
  const infoList: InfoList[] = [
    {
      title: "Источник",
      value: info[0],
      img: brand_png,
    },
    {
      title: "Дата покупки",
      value: info[1],
      img: date_png,
    },
    {
      title: "Цена покупки",
      value: info[2],
      img: price_png,
    },
    {
      title: "Цена доставки",
      value: info[3],
      img: price_png,
    },
  ]

  return (
    <div className="product__info">
      <ul className="product__info-list">
        {infoList.map((item: InfoList) => (
          <li key={item.title} className="product__info-item">
            <img className="product__info-icon" src={item.img} alt="" />
            <Property title={item.title} value={item.value} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Info
