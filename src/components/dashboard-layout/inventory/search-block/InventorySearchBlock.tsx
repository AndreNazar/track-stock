import "./inventory-search-block.scss"
import search_svg from "../../../../assets/imgs/actions/search.svg"
import add_svg from "../../../../assets/imgs/actions/add.svg"
import down_arrow_svg from "../../../../assets/imgs/actions/down-arrow.svg"
import { useDispatch, useSelector } from "react-redux"
import { newContextBlock, openDialogAddProduct } from "../../../../redux/slices/dialogSlice"
import { useNavigate } from "react-router"
import { changeSearchText } from "../../../../redux/slices/productSlice"
import { useEffect, useMemo, useRef } from "react"

function InventorySearchBlock() {
  
  const dispatch = useDispatch()
  const searchText = useSelector((s: any) => s.product.searchText)
  const currentContext = useSelector((s: any) => s.selections.currentContext)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const listSort = ["По возрастанию цены", "По убыванию цены"]

  const getMainLink = useMemo(() => {
    const local3symols = location.pathname.replace(/^\/+/, '').slice(0, 3)
    if (local3symols === "inv") return "inventory"
    if (local3symols === "sal") return "sales"
    return `${local3symols}`
  }, [location.pathname])
 
  function searchHandler(e: React.ChangeEvent<HTMLInputElement>) {

    if(e.target.value.trim() !== "") navigate(`/${getMainLink}/search`)
    else navigate(`/${getMainLink}`)

    dispatch(changeSearchText(e.target.value))
  }

  function openContextPrice(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation()
    e.preventDefault()
    
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect()
      dispatch(
        newContextBlock({
          list: listSort,
          title: "",
          top: dropdownRef.current.offsetTop + 32,
          left: rect.left,
          width: rect.width,
          firstClick: true,
          type: "sort",
        })
      )
    }
  }

  useEffect(() => {
    console.log(location.pathname.replace(/^\/+/, ''))
  }, [location.pathname])

  return (
    <div className="inventory-control">
      <div className="inventory-control__search inventory-ui">
        <img className="inventory-control__search-icon" src={search_svg} alt="" />
        <input placeholder="Что ищем?" value={searchText} onChange={searchHandler} className="inventory-control__search-input" type="text" />
      </div>
      <div ref={dropdownRef} onClick={openContextPrice} className="inventory-control__sort inventory-ui">
        <p className="inventory-ui__text">{listSort[currentContext.sort]}</p>
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