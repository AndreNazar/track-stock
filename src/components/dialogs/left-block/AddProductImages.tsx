import "./left-block.scss"

function AddProductImages({images}: {images: string[]}) {

  function getFirstImage() {
    if(images.length === 0) return ""
    return images[0]
  }


  return (
    <div className="dialog__image">
        <div className="dialog__image-wrapper">
            <img className="dialog__image-img" src={getFirstImage()} alt="" />
        </div>
    </div>
  )
}

export default AddProductImages