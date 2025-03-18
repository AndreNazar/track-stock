import Property from "../../../../ui/property/Property"
import "./price-info.scss"

function PriceInfo() {
  return (
    <div className="price-info">
      <Property title="Цена инвентаря" value="234 654 ₽" />
      <Property title="Цена подписок" value="21 670 ₽" />
      <Property title="Рыночная цена" value="550 670 ₽" />
      <Property title="Количество подписок" value="6" />
      <Property title="Товары в инвентаре" value="43" />
    </div>
  )
}

export default PriceInfo