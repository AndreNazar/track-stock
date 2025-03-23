import { TBrandKeys, eBrandKeys } from "../types/types"

export default function getBrandByName(name: string):TBrandKeys {
    switch(name.toLocaleLowerCase()){
        case "adidas":
            return eBrandKeys.adidas
        case "nike":
            return eBrandKeys.nike
        case "new balance":
            return eBrandKeys.newbalance
        case "jordan":
            return eBrandKeys.jordan
        case "asics":
            return eBrandKeys.asics
        default:
            return eBrandKeys.noname
    }
}