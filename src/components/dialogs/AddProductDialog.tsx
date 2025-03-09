import { IProducts } from "../../types/types"
import "./add-product-dialog.scss"
import boot_img2 from "../../assets/imgs/boots/boots2.png"
import boot_img2_1 from "../../assets/imgs/boots/boots2_1.png"
import boot_img2_2 from "../../assets/imgs/boots/boots2_2.png"
import boot_img2_3 from "../../assets/imgs/boots/boots2_3.png"
import Dialog from "../ui/dialog/Dialog"
import AddProductSearch from "./left-block/AddProductSearch"
import AddProductImages from "./left-block/AddProductImages"
import AddProductRight from "./right-block/AddProductRight"

function AddProductDialog(){

    
  const product: IProducts = {
    id: 1,
    name: "",
    brand: "",
    price: 100,
    images: [boot_img2, boot_img2_1, boot_img2_2, boot_img2_3],
    size: "",
    color: "",
    article: "",
    release_date: "",
    link: "",
    price_stockX: "",
    price_goat: "",
    price_outofstock: "",
    price_poison: "",
  }

    return <Dialog>
        
        <div className="dialog__wrapper-left">
            <AddProductSearch />
            <AddProductImages images={product.images} />
          </div>
          <div className="dialog__wrapper-right">
            <AddProductRight />
          </div>
    </Dialog>
}

export default AddProductDialog