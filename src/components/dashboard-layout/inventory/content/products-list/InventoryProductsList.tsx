import { eLocalTab, IProducts } from "../../../../../types/types"
import "./products-list.scss"
import InventoryProductsItem from "./item/InventoryProductsItem"
import Loading from "../../../../ui/loadings/Loading"
import { useEffect, useState } from "react"
import { useOutletContext } from "react-router"
import getBrandByName from "../../../../../utilities/getBrandByName"
import { useParams } from "react-router"
import { useSelector } from "react-redux"

function InventoryProductsList() {
  const [selectedProduct, setSelectedProduct] = useState<number>(-1)
  const { isLoading, productList } = useOutletContext<{ productList: IProducts[]; isLoading: boolean }>()
  const localTab = useSelector((s: any) => s.product.localTab)
  const searchText = useSelector((s: any) => s.product.searchText)
  const [products, setProducts] = useState<IProducts[]>([])
  const [searchProducts, setSearchProducts] = useState<IProducts[]>([])
  const params = useParams()

  function sortedProducts(): IProducts[] {
    let sortProducts = [...tabHandler()]
    return sortProducts.sort((a: IProducts, b: IProducts) => b.id - a.id)
  }

  function tabHandler() {
    if (localTab === eLocalTab.sales) return productList.filter((pl) => pl.isSale)
    else return productList.filter((pl) => !pl.isSale)
  }

  async function getProducts() {
    console.log(localTab)
    setProducts(
      sortedProducts()
        .filter((s: IProducts) => getBrandByName(s.brand) === params.brand_name)
        .map((s: IProducts): IProducts => {
          return {
            id: s.id,
            image: s.image,
            name: s.name,
            sizeEU: s.sizeEU,
            sizeUK: s.sizeUK,
            sizeUS: s.sizeUS,
            color: s.color,
            city: s.city,
            checkedFitting: s.checkedFitting,
            condition: s.condition,
            brand: s.brand,
            article: s.article,
            avg_price: s.avg_price,
            priceBuy: s.priceBuy,
            placeOfTransaction: s.placeOfTransaction,
            price_goat: s.price_goat,
            price_poison: s.price_poison,
            price_stockX: s.price_stockX,
            priceSale: s.priceSale,
            dateBuy: s.dateBuy,
            inStore: s.inStore,
            isSale: s.isSale,
          }
        })
    )
  }

  function getList() {
    if (searchProducts.length > 0) return searchProducts
    else return products
  }

  useEffect(() => {
    getProducts()
  }, [productList, localTab])

  useEffect(() => {
    console.log(searchText)
    if (searchText.trim() !== "") {
      setSearchProducts(sortedProducts().filter((s: IProducts) => s.name.toLowerCase().includes(searchText.toLowerCase())))
    }
  }, [searchText])

  return <div className="products-list">{isLoading ? <Loading size={40} /> : getList().map((p: IProducts) => <InventoryProductsItem product={p} key={p.id} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />)}</div>
}

export default InventoryProductsList
