import "../dialogs.scss"
import AddProductSearch from "./left-block/AddProductSearch"
import AddProductImages from "./left-block/AddProductImages"
import { IProducts } from "../../../../types/types"
import cross_img from "../../../../assets/imgs/control/cross.svg"
import boot_img2 from "../../../../assets/imgs/boots/boots2.png"
import boot_img2_1 from "../../../../assets/imgs/boots/boots2_1.png"
import boot_img2_2 from "../../../../assets/imgs/boots/boots2_2.png"
import boot_img2_3 from "../../../../assets/imgs/boots/boots2_3.png"
import AddProductRight from "./right-block/AddProductRight"
import "./add-dialog.scss"
import AddProductDown from "./down-block/AddProductDown"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { closeDialogAddProduct } from "../../../../redux/slices/dialogSlice"

function AddProductDialog() {
  
  const dialogRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const product: IProducts = {
    id: 1,
    name: "",
    brand: "",
    price: 100,
    images: [boot_img2, boot_img2_1, boot_img2_2, boot_img2_3],
    size: "",
    color: "",
    article: "",
    release_date: "",
    link: "",
    price_stockX: "",
    price_goat: "",
    price_outofstock: "",
    price_poison: "",
  }

  function closeDialog(){
    dialogRef.current?.classList.add("dialog--close")
    setTimeout(() => {
      dialogRef.current?.classList.remove("dialog--close")
      dispatch(closeDialogAddProduct())
    }, 10) // тут анимацию хотел сделать, попозже
  }

  return (
    <div ref={dialogRef} onClick={closeDialog} className="dialog">
      <div onClick={(e) => {e.stopPropagation();e.preventDefault()}} className="dialog__content">
        <div onClick={closeDialog} className="dialog__close">
          <img className="dialog__close-img" src={cross_img} alt="close" />
        </div>
        <div className="dialog__content-wrapper">
          <div className="dialog__wrapper-images">
            <AddProductSearch />
            <AddProductImages images={product.images} />
          </div>
          <div className="dialog__wrapper-right">
          <AddProductRight />
          </div>
          <div className="dialog__wrapper-down">
            <AddProductDown />
          </div>
        </div>
        <button className="dialog__button">Добавить</button>
      </div>
    </div>
  )
}

export default AddProductDialog
