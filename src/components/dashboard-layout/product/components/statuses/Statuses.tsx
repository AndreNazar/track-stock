import ButtonDash from "../../../../ui/buttons/ButtonDash"
import "./statuses.scss"
import goat_png from "../../../../../assets/imgs/platforms/goat.png"
import poizon_png from "../../../../../assets/imgs/platforms/poizon.png"
import stock_png from "../../../../../assets/imgs/platforms/stock.png"
import success_img from "../../../../../assets/imgs/statuses/success.svg"
import StatusItem from "./item/StatusItem"
import Loading from "../../../../ui/loadings/Loading"
import Api from "../../../../../api/api"
import { useDispatch } from "react-redux"
import { changeCurrentInfo } from "../../../../../redux/slices/productSlice"
import { useState } from "react"

interface IStatuses {
  id: number,
  goat: string,
  poizon: string,
  stockX: string,
  inStore: boolean,
  isSale: boolean,
  article: string
}

function Statuses({id, goat, poizon, stockX, inStore, isSale, article}: IStatuses) {

  const dispatch = useDispatch()
  
  const [isSaleLoading, setIsSaleLoading] = useState(false)
  const [isPostLoading, setIsPostLoading] = useState(false)
  const [isHideLoading, setIsHideLoading] = useState(false)

  function saleHandler() {
    setIsSaleLoading(true)
    console.log(isSaleLoading && isPostLoading && isHideLoading)
    const api = new Api()
    api.setSoldOut(id).then(res => {
      setIsSaleLoading(false)
      console.log(res)
      dispatch(changeCurrentInfo({key: "isSale", value: res.is_sale}))
    })

  }
  function postHandler() {
    setIsPostLoading(true)
    const api = new Api()
    api.putInStore(id).then(res => {
      setIsPostLoading(false)
      console.log(res)
      dispatch(changeCurrentInfo({key: "inStore", value: res.in_store}))
    })
  }
  function hideHandler() {
    setIsHideLoading(true)
    const api = new Api()
    api.deleteFromStore(id).then(res => {
      setIsHideLoading(false)
      console.log(res)
      dispatch(changeCurrentInfo({key: "inStore", value: res.in_store}))
    })
  }

  return (
    <div className="product__statuses"> 
      <div className="product__statuses-wrapper">
        <h3 className="product__statuses-heading">Статусы</h3>
        <div className="product__statuses-list">
          <StatusItem image={goat_png} value={goat} />
          <StatusItem image={poizon_png} value={poizon} />
          <StatusItem image={stock_png} value={stockX} />
        </div>
        <div className="product__statuses-buttons">
          {!article
          ? <Loading />
          : <>
          {isSale 
          ? <div className="sale-status"><img src={success_img} alt="" />Продано</div>
          : <ButtonDash onClick={saleHandler}>Продано</ButtonDash>}
            {!inStore
            ? <ButtonDash onClick={postHandler}>Разместить</ButtonDash>
            : <ButtonDash onClick={hideHandler}>Скрыть</ButtonDash>}
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Statuses