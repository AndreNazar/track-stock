import "./inventory-search-block.scss"
import search_svg from "../../../../assets/imgs/actions/search.svg"
import add_svg from "../../../../assets/imgs/actions/add.svg"
import down_arrow_svg from "../../../../assets/imgs/actions/down-arrow.svg"
import { useDispatch, useSelector } from "react-redux"
import { openDialogAddProduct } from "../../../../redux/slices/dialogSlice"
import { useNavigate } from "react-router"
import { changeSearchText } from "../../../../redux/slices/productSlice"
import { useParams } from "react-router"

function InventorySearchBlock() {
  
  const dispatch = useDispatch()
  const searchText = useSelector((s: any) => s.product.searchText)
  const navigate = useNavigate()
  const params = useParams()
 
  function searchHandler(e: React.ChangeEvent<HTMLInputElement>) {
console.log(params)
    if(e.target.value.trim() !== "") navigate("/inventory/search")
    else navigate("/inventory")

    dispatch(changeSearchText(e.target.value))
  }

  return (
    <div className="inventory-control">
      <div className="inventory-control__search inventory-ui">
        <img className="inventory-control__search-icon" src={search_svg} alt="" />
        <input placeholder="Что ищем?" value={searchText} onChange={searchHandler} className="inventory-control__search-input" type="text" />
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