import ButtonDash from "../../../../../../../ui/buttons/ButtonDash"
import remove_svg from "../../../../../../../../assets/imgs/control/remove.svg"
import cross_svg from "../../../../../../../../assets/imgs/control/cross.svg"
import status_svg from "../../../../../../../../assets/imgs/control/status.svg"
import edit_svg from "../../../../../../../../assets/imgs/control/edit.svg"
import copy_svg from "../../../../../../../../assets/imgs/control/copy.svg"
import "./control.scss"

function ProductControl(){

    return (
        <div className="product__control-wrapper">
        <div className="product__buttons">
          <ButtonDash>Продано</ButtonDash>
          <ButtonDash>Разместить</ButtonDash>
        </div>
        <div className="product__control">
          <img className="product__control-remove" src={remove_svg} alt="" />
          <img className="product__control-close" src={cross_svg} alt="" />
          <img className="product__control-status" src={status_svg} alt="" />
          <img className="product__control-edit" src={edit_svg} alt="" />
          <div className="empty-div" />
          <img className="product__control-copy" src={copy_svg} alt="" />
        </div>
      </div>
    )
}

export default ProductControl