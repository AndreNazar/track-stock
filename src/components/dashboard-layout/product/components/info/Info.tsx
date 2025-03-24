import { InfoList } from "../../../../../types/types"
import Property from "../../../../ui/property/Property"
import "./info.scss"
import date_green_png from "../../../../../assets/imgs/actions/date_green.svg"
import price_green_png from "../../../../../assets/imgs/actions/price_green.svg"

function Info({ info }: { info: (string | number | null)[] }) {
  const infoList: InfoList[] = [
    {
      title: "Дата покупки",
      value: info[0],
      img: date_green_png,
    },
    {
      title: "Дата продажи",
      value: info[1],
      img: date_green_png,
    },
    {
      title: "Цена покупки",
      value: info[2],
      img: price_green_png,
    },
    {
      title: "Цена продажи",
      value: info[3],
      img: price_green_png,
    },
  ]

  return (
    <div className="product__info">
      <ul className="product__info-list">
        {infoList.map((item: InfoList, i: number) => (
          <li key={item.title} className="product__info-item">
            <img className="product__info-icon" src={item.img} alt="" />
            <Property isPrice={(i === 2 || i === 3)} title={item.title} value={item.value} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Info
