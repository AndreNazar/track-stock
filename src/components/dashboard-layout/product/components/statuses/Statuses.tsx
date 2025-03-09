import ButtonDash from "../../../../ui/buttons/ButtonDash"
import "./statuses.scss"
import goat_png from "../../../../../assets/imgs/platforms/goat.png"

function Statuses() {
  return (
    <div className="product__statuses"> 
      <div className="product__statuses-wrapper">
        <h3 className="product__statuses-heading">Статусы</h3>
        <div className="product__statuses-list">
          <div className="product__statuses-item">
            <img className="product__statuses-icon" src={goat_png} alt="" />
            <p className="product__statuses-title">Статус</p>
            <p className="product__statuses-value">$220</p>
          </div>
        </div>
        <div className="product__statuses-buttons">
          <ButtonDash>Продано</ButtonDash>
          <ButtonDash>Разместить</ButtonDash>
        </div>
      </div>
    </div>
  )
}

export default Statuses