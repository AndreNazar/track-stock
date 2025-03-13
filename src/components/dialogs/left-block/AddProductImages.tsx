import "./left-block.scss"
import empty_img from "../../../assets/imgs/actions/photo.svg"

function AddProductImages({images}: {images: string[]}) {

  function getFirstImage() {
    if(images.length === 0) return empty_img
    return images[0]
  }


  return (
    <div className="dialog__image">
        <div className="dialog__image-wrapper">
            <img className={"dialog__image-img" + (images.length === 0 ? " dialog__image-img--empty" : "")} src={getFirstImage()} alt="" />
        </div>
    </div>
  )
}

export default AddProductImages