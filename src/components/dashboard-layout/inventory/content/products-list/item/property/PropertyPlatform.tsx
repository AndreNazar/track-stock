import "./property.scss"

function Property({img, value}: {img: string, value: string | null}) {
  return (
    <div className="product__property">
      <img className="product__property-icon" src={img} alt="" />
      <span className="product__property-value platform-value">{value ? value + " ₽" : "N/A"}</span>
    </div>
  )
}

export default Property
