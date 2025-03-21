import "./dialog.scss"
import cross_img from "../../../assets/imgs/control/cross.svg"
import { useEffect, useRef } from "react"
import Loading from "../loadings/Loading"
import { useDispatch, useSelector } from "react-redux"
import { closeContextBlock } from "../../../redux/slices/dialogSlice"
import { IContextBlock } from "../../../types/types"

interface IDialog {
  children: React.ReactNode
  onClick?: () => void
  loading?: boolean
  closeHandler: () => void
  buttonText: string
}

function Dialog({children, onClick = () => {}, loading=false, closeHandler, buttonText}: IDialog) {
  
  const dialogRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const contextBlock: IContextBlock = useSelector((s:any) => s.dialog.contextBlock)

  function closeDialog(){
    dialogRef.current?.classList.add("dialog--close")
    setTimeout(() => {
      dialogRef.current?.classList.remove("dialog--close")
      closeHandler()
    }, 10) // тут анимацию хотел сделать, попозже
  }

  function clickContent(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    e.preventDefault()
    contextBlock && dispatch(closeContextBlock());
  }

  useEffect(() => {
    console.log(contextBlock?.firstClick!)
  }, [contextBlock])

  return (
    <div ref={dialogRef} onClick={closeDialog} className="dialog">
      <div onClick={clickContent} className="dialog__content">
        <div onClick={closeDialog} className="dialog__close">
          <img className="dialog__close-img" src={cross_img} alt="close" />
        </div>
        <div className="dialog__content-wrapper">
          {children}
        </div>
        <button onClick={onClick} className="dialog__button">
          {!loading
          ? <span>{buttonText}</span>
          : <span><Loading color="#ffffff"/></span>}
        </button>
      </div>
    </div>
  )
}

export default Dialog
