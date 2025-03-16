import "./dialog.scss"
import cross_img from "../../../assets/imgs/control/cross.svg"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { closeDialogAddProduct } from "../../../redux/slices/dialogSlice"
import Loading from "../loadings/Loading"

interface IDialog {
  children: React.ReactNode
  onClick?: () => void
  loading?: boolean
}

function Dialog({children, onClick = () => {}, loading=false}: IDialog) {
  
  const dialogRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

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
          {children}
        </div>
        <button onClick={onClick} className="dialog__button">
          {!loading
          ? <span>Добавить</span>
          : <span><Loading color="#ffffff"/></span>}
        </button>
      </div>
    </div>
  )
}

export default Dialog
