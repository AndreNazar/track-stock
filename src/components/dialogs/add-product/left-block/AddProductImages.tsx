import "./left-block.scss"
import empty_img from "../../../../assets/imgs/actions/photo.svg"
import Loading from "../../../ui/loadings/Loading"

function AddProductImages({image, isLoadingArticle}: {image: string, isLoadingArticle: boolean}) {

  function getFirstImage() {
    if(!image) return empty_img
    return image
  }


  return (
    <div className="dialog__image">
        <div className="dialog__image-wrapper">
          
            {isLoadingArticle 
            ? <Loading /> 
            : <img className={"dialog__image-img" + (!image ? " dialog__image-img--empty" : "")} src={getFirstImage()} alt="" />}
        </div>
    </div>
  )
}

export default AddProductImages