import { IProductSalesTab } from "../../../../../types/types"
import "./sales.scss"

function Sales() {
  const tabs: IProductSalesTab[] = [
    {
      type: "all",
      title: "За все время",
      active: true,
    },
    {
      type: "6 months",
      title: "6 месяцев",
      active: false,
    },
    {
      type: "month",
      title: "Месяц",
      active: false,
    },
    {
      type: "week",
      title: "Неделя",
      active: false,
    },
  ]

  return (
    <div className="product__sales">
      <h3 className="product__sales-heading">Продажи</h3>
      <div className="product__sales-tabs">
        {tabs.map((t:IProductSalesTab) => (
          <div className={`product__sales-tab${t.active ? " product__sales-tab--active" : ""}`} key={t.type}>
            <p className="tab__title">{t.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sales
