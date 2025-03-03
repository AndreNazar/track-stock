import "./inventory-search-block.scss"
import search_svg from "../../../../assets/imgs/actions/search.svg"
import add_svg from "../../../../assets/imgs/actions/add.svg"
import down_arrow_svg from "../../../../assets/imgs/actions/down-arrow.svg"
import { useDispatch } from "react-redux"
import { openDialogAddProduct } from "../../../../redux/slices/dialogSlice"

function InventorySearchBlock() {
  const dispatch = useDispatch()
  return (
    <div className="inventory-control">
      <div className="inventory-control__search inventory-ui">
        <img className="inventory-control__search-icon" src={search_svg} alt="" />
        <input placeholder="Что ищем?" className="inventory-control__search-input" type="text" />
      </div>
      <div className="inventory-control__sort inventory-ui">
        <p className="inventory-ui__text">Группировка</p>
        <img src={down_arrow_svg} className="inventory-ui__icon" alt="" />
      </div>
      <div onClick={() => dispatch(openDialogAddProduct())} className="inventory-control__add inventory-ui">
        <p className="inventory-ui__text">Добавить</p>
        <img src={add_svg} className="inventory-ui__icon" alt="" />
      </div>
    </div>
  )
}

export default InventorySearchBlock