import { CreateSneakersLot, IDataSelect, IProducts } from "../../../types/types"
import "../add-product/add-product-dialog.scss"
import Dialog from "../../ui/dialog/Dialog"
import { useEffect, useMemo, useState } from "react"
import ContextList from "../../ui/contexts/ContextList"
import api, { Api } from "../../../api/api"
import { closeDialogEditProduct } from "../../../redux/slices/dialogSlice"
import { useDispatch, useSelector } from "react-redux"
import EditProductImages from "./left-block/EditProductImages"
import EditProductSearch from "./left-block/EditProductSearch"
import EditProductRight from "./right-block/EditProductRight"

function EditProductDialog() {

  const dispatch = useDispatch()
  const dataDialogEdit = useSelector((s:any) => s.dialog.dataDialogEdit)
  const [isOpenBrands, setIsOpenBrands] = useState<boolean>(false)
  const [isLoadingAdd, setLoadingAdd] = useState<boolean>(false)
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
    checkedFitting: false,
  })
  const [brandsList, setBrandsList] = useState<IDataSelect[]>([])
  const [conditionsList, setConditionsList] = useState<IDataSelect[]>([])

  

  function changeCurrentInfo (key: string, value: string | number | boolean) {
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

  const loadDataDialog = async () => {
    const api = new Api()
    const brands = await api.getBrands()
    const conditions = await api.getConditions()
    let _brands: IDataSelect[] = []
    let _conditions: IDataSelect[] = []
    brands.brands.map((b: any) => _brands.push({id: b.id, name: b.name, selected: false}))
    conditions.conditions.map((c: any) => _conditions.push({id: c.id, name: c.name, selected: false}))
    
    setBrandsList(_brands)
    setConditionsList(_conditions)
  }

  async function sendDataHandler () {

    if(isLoadingAdd) return
    setLoadingAdd(true)
    const data: CreateSneakersLot = {
      brand: brandsList.find(b => b.selected)?.name ?? "",
      model: currentInfo.name || "Adizero F50 League Laceless TF",
      color: currentInfo.color || "1",
      city: currentInfo.city,
      place: currentInfo.placeOfTransaction,
      condition: conditionsList.find(c => c.selected)?.name ?? "",
      price: currentInfo.priceBuy,
      uk_size: +currentInfo.sizeUK,
      us_size: +currentInfo.sizeUS,
      eu_size: +currentInfo.sizeEU,
      fitting: currentInfo.checkedFitting,
      article: currentInfo.article,
    }

    try {
      console.log(data)
      const api = new Api()
      const response = await api.createSneakersLot(data);
      console.log("Sneakers Lot Created:", response);

      setLoadingAdd(false)
      dispatch(closeDialogEditProduct())
      
    } catch (error) {
      console.error("Failed to create sneakers lot:", error);
    }
  }

  async function fillDataDialog () {
    setCurrentInfo(dataDialogEdit)
    //setBrandsList((prev) => prev.map(p => p.)) 
    //setConditionsList((prev) => prev.map(p => p.))
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


  useEffect(() => {
    loadDataDialog()
    fillDataDialog()
  }, [])

  return (
    <Dialog 
    closeHandler={() => dispatch(closeDialogEditProduct())} 
    onClick={sendDataHandler} 
    loading={isLoadingAdd}
    buttonText="Сохранить"
    >
      <div className="dialog__wrapper-left">
        <EditProductSearch
        article={currentInfo.article}
        setArticle={(e) => changeCurrentInfo("article", e)}  />
        <EditProductImages image={currentInfo.image} />
      </div>
      <div className="dialog__wrapper-right">
        <EditProductRight 
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

export default EditProductDialog
