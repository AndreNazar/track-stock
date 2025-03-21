import ButtonDash from "../../../../../../../ui/buttons/ButtonDash"
import cross_svg from "../../../../../../../../assets/imgs/control/cross.svg"
import edit_svg from "../../../../../../../../assets/imgs/control/edit.svg"
import copy_svg from "../../../../../../../../assets/imgs/control/copy.svg"
import "./control.scss"

function ProductControl() {

  const soldButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
  }

  const postButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
  }

  const closeButtonHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()
    e.preventDefault()
  }
  const editButtonHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()
    e.preventDefault()
  }
  const copyButtonHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()
    e.preventDefault()
  }


  return (
    <div className="product__control-wrapper">
      <div className="product__buttons">
        <ButtonDash onClick={soldButtonHandler}>Продано</ButtonDash>
        <ButtonDash onClick={postButtonHandler}>Разместить</ButtonDash>
      </div>
      <div className="product__control">
        <img onClick={closeButtonHandler} className="product__control-close" src={cross_svg} alt="" />
        <img onClick={editButtonHandler} className="product__control-edit" src={edit_svg} alt="" />
        <img onClick={copyButtonHandler} className="product__control-copy" src={copy_svg} alt="" />
      </div>
    </div>
  )
}

export default ProductControl
