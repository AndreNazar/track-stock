import InventoryBrandsItem from "./InventoryBrandItem";
import "./brands-list.scss"
import { eLocalTab, IBrand, IProducts } from "../../../../../types/types";
import { useOutletContext } from "react-router";
import { useEffect, useState } from "react";
import Loading from "../../../../ui/loadings/Loading";
import getBrandImage from "../../../../../utilities/getBrandImage";
import getBrandByName from "../../../../../utilities/getBrandByName";
import { useSelector } from "react-redux";

function InventoryBrandsList() {

  const { isLoading, productList } = useOutletContext<{productList: IProducts[], isLoading: boolean}>()

  const [brandList, setBrandList] = useState<IBrand[]>([])
  const localTab = useSelector((s: any) => s.product.localTab)

  function tabHandler() {
    if(localTab === eLocalTab.sales) 
      return productList.filter(pl => pl.isSale)
    else
      return productList.filter(pl => !pl.isSale)
  }

  useEffect(() => {
    
    const brands: IBrand[] = []
    tabHandler().forEach((p: IProducts) => {
      if(!brands.find(b => b.link === p.brand)) {
        brands.push({
          id: brands.length + 1,
          img: getBrandImage(getBrandByName(p.brand)),
          link: p.brand
        })
      }
    })
    setBrandList(brands)

  }, [productList, localTab])

    return (
      <ul className="brands__list">
        {isLoading 
        ? <Loading size={40}/>
        : brandList.map((b: IBrand) => <InventoryBrandsItem key={b.id} brand={b} />)}
      </ul>
    );
  }
  
  export default InventoryBrandsList