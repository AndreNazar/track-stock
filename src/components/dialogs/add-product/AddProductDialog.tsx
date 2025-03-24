import { eBrandKeys, IDataSelect, IProducts, SneakersLot } from "../../../types/types"
import "./add-product-dialog.scss"
import Dialog from "../../ui/dialog/Dialog"
import AddProductSearch from "./left-block/AddProductSearch"
import AddProductImages from "./left-block/AddProductImages"
import AddProductRight from "./right-block/AddProductRight"
import { useEffect, useState } from "react"
import { Api } from "../../../api/api"
import { closeDialogAddProduct } from "../../../redux/slices/dialogSlice"
import { useDispatch, useSelector } from "react-redux"
import { addToProductList } from "../../../redux/slices/productSlice"


let timer: any = null

function AddProductDialog() {

  const dispatch = useDispatch()
  const currentContext = useSelector((s: any) => s.selections.currentContext)
  const calendarData = useSelector((s: any) => s.dialog.calendarData)
  const [isLoadingAdd, setLoadingAdd] = useState<boolean>(false)
  const [currentInfo, setCurrentInfo] = useState<IProducts>({
    id: 1,
    name: "",
    brand: "",
    image: "",
    color: "",
    article: "",
    avg_price: "",
    price_stockX: "",
    price_goat: "",
    price_poison: "",
    priceSale: 0,
    priceBuy: 0,
    dateBuy: "",
    condition: "",
    inStore: false,
    sizeUS: "",
    sizeUK: "",
    sizeEU: "",
    city: "",
    placeOfTransaction: "",
    checkedFitting: false,
    isSale: false,
    dateSale: "",
  })
  const [brandsList, setBrandsList] = useState<IDataSelect[]>([])
  const [conditionsList, setConditionsList] = useState<IDataSelect[]>([])
  const [isLoadingArticle, setIsLoadingArticle] = useState<boolean>(false)
  

  async function changeCurrentInfo (key: string, value: string | number | boolean) {
    setCurrentInfo(prev => {
      return {...prev, [key]: value}
    })
  }

  const articleHandler = async (e: string) => {
    const api = new Api()

    setIsLoadingArticle(true)
    changeCurrentInfo("article", e)
    changeCurrentInfo(eBrandKeys.color, "")
    changeCurrentInfo(eBrandKeys.name, "")

    if (timer) clearTimeout(timer)
    timer = setTimeout(async () => {
      const res = await api.loadProductInfo(e)
      await changeCurrentInfo(eBrandKeys.color, res.color)
      await changeCurrentInfo(eBrandKeys.name, res.model)
      await changeCurrentInfo("image", res.photo_url)
      setIsLoadingArticle(false)
    }, 500)
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
    const data: SneakersLot = {
      uk_size: +currentInfo.sizeUK,
      us_size: +currentInfo.sizeUS,
      eu_size: +currentInfo.sizeEU,
      brand: brandsList.map(b => b.name)[currentContext.brands] ?? "",
      price: +currentInfo.priceBuy!,
      article: currentInfo.article,
      condition: conditionsList.map(c => c.name)[currentContext.statuses] ?? "",
      city: currentInfo.city,
      place: currentInfo.placeOfTransaction,
      fitting: currentInfo.checkedFitting,
      purchase_date: calendarData.date,
      purchase_price: +currentInfo.priceBuy!,

    }

    try {
      console.log(data)
      const api = new Api()
      const response = await api.createSneakersLot(data);
      console.log("Sneakers Lot Created:", response);

      dispatch(addToProductList({
        ...currentInfo,
        id: response.id
      }))

      setLoadingAdd(false)
      dispatch(closeDialogAddProduct())
      
    } catch (error) {
      console.error("Failed to create sneakers lot:", error);
    }
  }


  useEffect(() => {
    loadDataDialog()
  }, [])

  return (
    <Dialog 
    closeHandler={() => dispatch(closeDialogAddProduct())} 
    onClick={sendDataHandler} 
    loading={isLoadingAdd}
    buttonText="Добавить">
      <div className="dialog__wrapper-left">
        <AddProductSearch
        article={currentInfo.article}
        setArticle={articleHandler}  />
        <AddProductImages isLoadingArticle={isLoadingArticle} image={currentInfo.image!} />
      </div>
      <div className="dialog__wrapper-right">
        <AddProductRight 
        brandsList={brandsList} 
        conditionsList={conditionsList}
        currentInfo={currentInfo} 
        changeCurrentInfo={changeCurrentInfo}
        isLoadingArticle={isLoadingArticle}
        />
      </div>
    </Dialog>
  )
}

export default AddProductDialog
