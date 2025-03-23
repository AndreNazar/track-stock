  import adidas_logo from "../assets/imgs/brands/adidas.png"
  import nike_logo from "../assets/imgs/brands/nike.png"
  import newbalance_logo from "../assets/imgs/brands/newbalance.png"
  import jordan_logo from "../assets/imgs/brands/jordan.png"
  import asics_logo from "../assets/imgs/brands/asics.png"
  import no_logo from "../assets/imgs/brands/nologo.png"
import { eBrandKeys, TBrandKeys } from "../types/types"
  
  export default function getBrandImage(name: TBrandKeys):string {
    switch(name) {
      case eBrandKeys.adidas:
        return adidas_logo
      case eBrandKeys.nike:
        return nike_logo
      case eBrandKeys.nike:
        return newbalance_logo
      case eBrandKeys.newbalance:
        return jordan_logo
      case eBrandKeys.asics:
        return asics_logo
      default:
        return no_logo
    }
  }