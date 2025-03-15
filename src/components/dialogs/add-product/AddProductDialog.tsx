import { IBrandsSelect, IDataSelect, IProducts } from "../../../types/types"
import "./add-product-dialog.scss"
import Dialog from "../../ui/dialog/Dialog"
import AddProductSearch from "./left-block/AddProductSearch"
import AddProductImages from "./left-block/AddProductImages"
import AddProductRight from "./right-block/AddProductRight"
import { useMemo, useState } from "react"
import ContextList from "../../ui/contexts/ContextList"

function AddProductDialog() {

  const [isOpenBrands, setIsOpenBrands] = useState<boolean>(false)
  const [isOpenConditions, setIsOpenConditions] = useState<boolean>(false)
  const [currentInfo, setCurrentInfo] = useState<IProducts>({
    id: 1,
    name: "",
    brand: "",
    image: "",
    color: "",
    article: "",
    release_date: "",
    price_stockX: "",
    price_goat: "",
    price_outofstock: "",
    price_poison: "",
    priceBuy: 0,
    priceDelivery: 0,
    condition: "",
    sizeUS: "",
    sizeUK: "",
    sizeEU: "",
    city: "",
    placeOfTransaction: "",
  })
  const [brandsList, setBrandsList] = useState<IDataSelect[]>([
    {id: 1, name: "Adidas", selected: true},
    {id: 2, name: "Nike", selected: false},
  ])
  const [conditionsList, setConditionsList] = useState<IDataSelect[]>([
    {id: 1, name: "Новое", selected: true},
    {id: 2, name: "б/у", selected: false},
  ])

  

  function changeCurrentInfo (key: string, value: string | number) {
    setCurrentInfo({...currentInfo, [key]: value})
  }
  

  function setContextListBrands(idx: number){
    const newList = [...brandsList.map(item => {
      item.selected = false
      return item
    })]
    newList[idx].selected = true
    setBrandsList(newList)
  }
  function setContextListConditions(idx: number){
    const newList = [...conditionsList.map(item => {
      item.selected = false
      return item
    })]
    newList[idx].selected = true
    setConditionsList(newList)
  }

  
  const dialogLayout = useMemo(() => {
    if(!(isOpenBrands && isOpenConditions)){
      if(isOpenBrands) return <ContextList 
      title="Выберите бренд" 
      list={brandsList.map(b => b.name)} 
      setList={setContextListBrands} 
      setIsOpenBrands={setIsOpenBrands}
      />

      else if(isOpenConditions) return <ContextList
      title="Выберите статус" 
      list={conditionsList.map(c => c.name)} 
      setList={setContextListConditions} 
      setIsOpenBrands={setIsOpenConditions}
      />
    }else{
      setIsOpenBrands(false)
      setIsOpenConditions(false)
    }

    return null

  }, [isOpenBrands, isOpenConditions, brandsList, conditionsList])

  return (
    <Dialog>
      <div className="dialog__wrapper-left">
        <AddProductSearch />
        <AddProductImages image={currentInfo.image} />
      </div>
      <div className="dialog__wrapper-right">
        <AddProductRight 
        brandsList={brandsList} 
        conditionsList={conditionsList}
        currentInfo={currentInfo} 
        changeCurrentInfo={changeCurrentInfo} 
        isOpenBrands={isOpenBrands}
        setIsOpenConditions={setIsOpenConditions}
        setIsOpenBrands={setIsOpenBrands}
        />
      </div>
      {dialogLayout}
    </Dialog>
  )
}

export default AddProductDialog
