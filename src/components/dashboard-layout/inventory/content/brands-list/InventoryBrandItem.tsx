import { NavLink } from "react-router-dom";
import arrow_img from "../../../../../assets/imgs/actions/big-down-arrow.svg"
import { IBrand } from "../../../../../types/types";
import getBrandByName from "../../../../../utilities/getBrandByName";

function InventoryBrandsItem({brand}:{brand: IBrand}) {

    const shareHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
    }

    return (<li className="brands__item">
        <NavLink to={getBrandByName(brand.link)} className="brands__item-link">
            <button onClick={shareHandler} className="brands__item-share">Поделиться</button>
            <img className="brands__item-image" src={brand.img} alt="" />           
            <img className="brands__item-arrow" src={arrow_img} alt="" />
        </NavLink>
    </li>);
  }
  
  export default InventoryBrandsItem