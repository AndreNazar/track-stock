import "./property.scss"

function Property({attribute, value}: {attribute: string, value: string | null}) {
  return (
  <div className="product__property">
    <span className="product__property-attribute">{attribute}</span>
    <span className="product__property-value">{value}</span>
  </div>
  )
}

export default Property