import { useEffect } from "react"
import { CardList } from "../../../types/types"
import Loading from "../loadings/Loading"
import "./property.scss"

function Property({ title, value, isPrice }: CardList & {isPrice?: boolean}) {

useEffect(() => {
  console.log(title, value)
}, [value])

  return (
    <div className="property">
      <p className="property__title">{title}</p>
      <p className="property__value">{value !== null ? value : <Loading size={10} />}{(isPrice && value !== null) && " ₽"}</p>
    </div>
  )
}

export default Property
