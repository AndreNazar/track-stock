import "./dialog.scss"
import cross_img from "../../../assets/imgs/control/cross.svg"
import { useRef } from "react"
import Loading from "../loadings/Loading"

interface IDialog {
  children: React.ReactNode
  onConfirm?: () => void
  onCancel?: () => void
  loading?: boolean
  closeHandler: () => void
  confirmText: string
  cancelText: string
}

function ConfirmDialog({children, onConfirm = () => {}, onCancel = () => {}, loading=false, closeHandler, confirmText, cancelText}: IDialog) {
  
  const dialogRef = useRef<HTMLDivElement>(null)

  function closeDialog(){
    dialogRef.current?.classList.add("dialog--close")
    setTimeout(() => {
      dialogRef.current?.classList.remove("dialog--close")
      closeHandler()
    }, 10) // тут анимацию хотел сделать, попозже
  }

  return (
    <div ref={dialogRef} onClick={closeDialog} className="confirm-dialog dialog">
      <div onClick={(e) => {e.stopPropagation();e.preventDefault()}} className="confirm-dialog__content dialog__content">
        <div onClick={closeDialog} className="dialog__close">
          <img className="dialog__close-img" src={cross_img} alt="close" />
        </div>
        <div className="dialog__content-wrapper">
          {children}
        </div>
        <button onClick={onConfirm} className="dialog__button confirm-dialog__button--confirm">
          {!loading
          ? <span>{confirmText}</span>
          : <span><Loading color="#ffffff"/></span>}
        </button>
        <button onClick={onCancel} className="dialog__button confirm-dialog__button--cancel">
          <span>{cancelText}</span>
        </button>
      </div>
    </div>
  )
}

export default ConfirmDialog
