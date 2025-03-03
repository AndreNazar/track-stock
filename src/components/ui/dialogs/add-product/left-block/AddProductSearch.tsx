import search_svg from "../../../../../assets/imgs/actions/search.svg"
import "./left-block.scss"

function AddProductSearch() {
  return (
    <div className="dialog__search">
      <p className="dialog__search-title">Название</p>
      <div className="inventory-control__search inventory-ui">
        <img className="inventory-control__search-icon" src={search_svg} alt="" />
        <input placeholder="Поиск" className="inventory-control__search-input" type="text" />
      </div>
    </div>
  )
}


export default AddProductSearch