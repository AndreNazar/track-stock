import InventoryBrandsItem from "./InventoryBrandItem";
import adidas_logo from "../../../../../assets/imgs/brands/adidas.png";
import "./brands-list.scss"
import { IBrand } from "../../../../../types/types";

function InventoryBrandsList() {

  const brands: IBrand[] = [
    {
      id: 1,
      img: adidas_logo,
      link: "adidas",
    }
  ]

    return (
      <ul className="brands__list">
        {brands.map((b: IBrand) => <InventoryBrandsItem key={b.id} brand={b} />)}
      </ul>
    );
  }
  
  export default InventoryBrandsList