import "../../add-product/left-block/left-block.scss"
import empty_img from "../../../../assets/imgs/actions/photo.svg"

function EditProductImages({image}: {image: string}) {

  function getFirstImage() {
    if(!image) return empty_img
    return image
  }


  return (
    <div className="dialog__image">
        <div className="dialog__image-wrapper">
            <img className={"dialog__image-img" + (!image ? " dialog__image-img--empty" : "")} src={getFirstImage()} alt="" />
        </div>
    </div>
  )
}

export default EditProductImages