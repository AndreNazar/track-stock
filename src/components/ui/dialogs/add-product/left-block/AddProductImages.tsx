import close_img from "../../../../../assets/imgs/control/cross.svg"
import add_img from "../../../../../assets/imgs/control/add_img.png"
import "./left-block.scss"

function AddProductImages({images}: {images: string[]}) {

  function getFirstImage() {
    if(images.length === 0) return ""
    return images[0]
  }

  function getImages(): string[] {
    if(images.length === 0) return []
    
    return images.filter((img, index) => index !== 0)
  }

  return (
    <div className="dialog__images">
        <div className="dialog__images-main">
            <img className="dialog__images-main-img" src={getFirstImage()} alt="" />
        </div>
        <div className="dialog__images-list">
          {getImages().map(img => <div className="dialog__images-item">
                <img className="dialog__images-item-img" src={img} alt="" />
                <img className="dialog__images-item-close" src={close_img} alt="" />
            </div>
          )}
          <div className="dialog__images-item dialog__images-add">
            <img className="dialog__images-item-img dialog__images-add-img" src={add_img} alt="" />
          </div>
        </div>
    </div>
  )
}

export default AddProductImages