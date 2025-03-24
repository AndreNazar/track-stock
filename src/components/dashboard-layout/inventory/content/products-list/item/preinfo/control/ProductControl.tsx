import ButtonDash from "../../../../../../../ui/buttons/ButtonDash"
import cross_svg from "../../../../../../../../assets/imgs/control/cross.svg"
import edit_svg from "../../../../../../../../assets/imgs/control/edit.svg"
import copy_svg from "../../../../../../../../assets/imgs/control/copy.svg"
import success_img from "../../../../../../../../assets/imgs/statuses/success.svg"
import "./control.scss"
import { IProducts } from "../../../../../../../../types/types"
import { openDialogDeleteProduct, openDialogEditProduct } from "../../../../../../../../redux/slices/dialogSlice"
import { useDispatch } from "react-redux"
import { changeCurrentInfo } from "../../../../../../../../redux/slices/productSlice"
import { useState } from "react"
import Api from "../../../../../../../../api/api"
import Loading from "../../../../../../../ui/loadings/Loading"

function ProductControl({ product }: { product: IProducts }) {
  const dispatch = useDispatch()
  const [isSaleLoading, setIsSaleLoading] = useState(false)
  const [isPostLoading, setIsPostLoading] = useState(false)
  const [isHideLoading, setIsHideLoading] = useState(false)

  function hidebuttonHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    e.preventDefault()
    setIsHideLoading(true)
    const api = new Api()
    api.deleteFromStore(product.id).then((res) => {
      console.log(res)
      setIsHideLoading(false)
      dispatch(changeCurrentInfo({ key: "inStore", value: res.in_store }))
    })
  }

  const soldButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setIsSaleLoading(true)

    const api = new Api()
    api.setSoldOut(product.id).then((res) => {
      setIsSaleLoading(false)
      console.log(res)
      dispatch(changeCurrentInfo({ key: "isSale", value: res.is_sale }))
    })
  }

  const postButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setIsPostLoading(true)

    const api = new Api()
    api.putInStore(product.id).then((res) => {
      setIsPostLoading(false)
      console.log(res)
      dispatch(changeCurrentInfo({ key: "inStore", value: res.in_store }))
    })
  }

  const deleteButtonHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()
    e.preventDefault()
    if (product) {
      dispatch(openDialogDeleteProduct({ id: product.id, name: product.name }))
    }
  }
  const editButtonHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()
    e.preventDefault()
    if (product) {
      dispatch(openDialogEditProduct({ ...product }))
    }
  }
  const copyButtonHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <div className="product__control-wrapper">
      <div className="product__buttons">
        {product.isSale ? (
          <div className="sale-status">
            <img src={success_img} alt="" />
            Продано
          </div>
        ) : (
          <>
            <ButtonDash onClick={soldButtonHandler}>{isSaleLoading ? <Loading size={10} /> : "Продано"}</ButtonDash>
            {!product.inStore 
            ? <ButtonDash onClick={postButtonHandler}>{isPostLoading ? <Loading size={10} /> : "Разместить"}</ButtonDash> 
            : <ButtonDash onClick={hidebuttonHandler}>{isHideLoading ? <Loading size={10} /> : "Скрыть"}</ButtonDash>}
          </>
        )}
      </div>
      <div className="product__control">
        <img onClick={deleteButtonHandler} className="product__control-close" src={cross_svg} alt="" />
        <img onClick={editButtonHandler} className="product__control-edit" src={edit_svg} alt="" />
        <img onClick={copyButtonHandler} className="product__control-copy" src={copy_svg} alt="" />
      </div>
    </div>
  )
}

export default ProductControl
