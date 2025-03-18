import { CardList } from "../../../types/types"
import Loading from "../loadings/Loading"
import "./property.scss"

function Property({ title, value }: CardList) {
  return (
    <div className="property">
      <p className="property__title">{title}</p>
      <p className="property__value">{value ? value : <Loading size={10} />}</p>
    </div>
  )
}

export default Property
