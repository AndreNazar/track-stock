import { IProducts } from "../../types/types"
import "./add-product-dialog.scss"
import Dialog from "../ui/dialog/Dialog"
import AddProductSearch from "./left-block/AddProductSearch"
import AddProductImages from "./left-block/AddProductImages"
import AddProductRight from "./right-block/AddProductRight"
import { useState } from "react"

function AddProductDialog(){

    
  const [currentInfo, setCurrentInfo] = useState<IProducts>({
    id: 1,
    name: "",
    brand: "",
    price: 0,
    images: [],
    size: "",
    color: "",
    article: "",
    release_date: "",
    price_stockX: "",
    price_goat: "",
    price_outofstock: "",
    price_poison: "",
  })

    return <Dialog>
        
        <div className="dialog__wrapper-left">
            <AddProductSearch />
            <AddProductImages images={currentInfo.images} />
          </div>
          <div className="dialog__wrapper-right">
            <AddProductRight />
          </div>
    </Dialog>
}

export default AddProductDialog