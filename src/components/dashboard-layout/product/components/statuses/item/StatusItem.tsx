import "./status-item.scss"

function StatusItem({ value, image }: { value: string; image: string }) {
  return (
    <div className="product__statuses-item">
      <img className="product__statuses-icon" src={image} alt="" />
      <p className="product__statuses-title">Цена площадки</p>
      <p className="product__statuses-value">{value ? `${value} ₽` : <span className="product__statuses-n-a">N/A</span>}</p>
    </div>
  )
}
export default StatusItem
