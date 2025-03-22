import ButtonDash from "../../../../ui/buttons/ButtonDash"
import "./statuses.scss"
import goat_png from "../../../../../assets/imgs/platforms/goat.png"
import poizon_png from "../../../../../assets/imgs/platforms/poizon.png"
import stock_png from "../../../../../assets/imgs/platforms/stock.png"
import StatusItem from "./item/StatusItem"
import Loading from "../../../../ui/loadings/Loading"

interface IStatuses {
  goat: string,
  poizon: string,
  stockX: string,
  inStore: boolean,
  article: string
}

function Statuses({goat, poizon, stockX, inStore, article}: IStatuses) {
  return (
    <div className="product__statuses"> 
      <div className="product__statuses-wrapper">
        <h3 className="product__statuses-heading">Статусы</h3>
        <div className="product__statuses-list">
          {goat && <StatusItem image={goat_png} value={goat} />}
          {poizon && <StatusItem image={poizon_png} value={poizon} />}
          {stockX && <StatusItem image={stock_png} value={stockX} />}
        </div>
        <div className="product__statuses-buttons">
          {!article
          ? <Loading />
          : inStore
            ? <ButtonDash onClick={() => {}}>Продано</ButtonDash>
            : <ButtonDash onClick={() => {}}>Разместить</ButtonDash>
          }
        </div>
      </div>
    </div>
  )
}

export default Statuses