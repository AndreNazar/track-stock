import { eBrandKeys, IDataSelect, IProducts, SneakersLot } from "../../../types/types"
import "../add-product/add-product-dialog.scss"
import Dialog from "../../ui/dialog/Dialog"
import { useEffect, useState } from "react"
import { Api } from "../../../api/api"
import { closeDialogEditProduct } from "../../../redux/slices/dialogSlice"
import { useDispatch, useSelector } from "react-redux"
import EditProductImages from "./left-block/EditProductImages"
import EditProductSearch from "./left-block/EditProductSearch"
import EditProductRight from "./right-block/EditProductRight"
import { selectCurrentContext } from "../../../redux/slices/selectionsSlice"
import { changeCurrentInfoEditor, setCurrentInfo, setCurrentInfoEditor } from "../../../redux/slices/productSlice"

let timer: any = null

function EditProductDialog() {

  const dispatch = useDispatch()
  const dataDialogEdit = useSelector((s:any) => s.dialog.dataDialogEdit)
  const [isLoadingAdd, setLoadingAdd] = useState<boolean>(false)
  const currentContext = useSelector((s: any) => s.selections.currentContext)
  const currentInfoEditor: IProducts = useSelector((s:any) => s.product.currentInfoEditor)
  const [brandsList, setBrandsList] = useState<IDataSelect[]>([])
  const [conditionsList, setConditionsList] = useState<IDataSelect[]>([])
  const [isLoadingArticle, setIsLoadingArticle] = useState<boolean>(false)

  


  
    const articleHandler = async (e: string) => {
      const api = new Api()
  
      setIsLoadingArticle(true)
      dispatch(changeCurrentInfoEditor({key:"article", value: e}))
      dispatch(changeCurrentInfoEditor({key:eBrandKeys.color, value: ""}))
      dispatch(changeCurrentInfoEditor({key:eBrandKeys.name, value: ""}))
  
      if (timer) clearTimeout(timer)
      timer = setTimeout(async () => {
        const res = await api.loadProductInfo(e)
        dispatch(changeCurrentInfoEditor({key:eBrandKeys.color, value: res.color}))
        dispatch(changeCurrentInfoEditor({key:eBrandKeys.name, value: res.model}))
        dispatch(changeCurrentInfoEditor({key:"image", value: res.photo_url}))
        setIsLoadingArticle(false)
      }, 1000)
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
      id: currentInfoEditor.id,
      uk_size: +currentInfoEditor.sizeUK,
      us_size: +currentInfoEditor.sizeUS,
      eu_size: +currentInfoEditor.sizeEU,
      brand: brandsList.map(b => b.name)[currentContext.brands] ?? "",
      condition: conditionsList.map(c => c.name)[currentContext.statuses] ?? "",
      price: +currentInfoEditor.priceSale,
      article: currentInfoEditor.article,
      city: currentInfoEditor.city,
      place: currentInfoEditor.placeOfTransaction,
      fitting: currentInfoEditor.checkedFitting,
      purchase_date: currentInfoEditor.dateBuy,
      purchase_price: currentInfoEditor.priceBuy,
    }
    
    
    try {
      console.log(data)
      const api = new Api()
      const res = await api.updateSneaker(data);
      const resArticle = await api.loadProductInfo(res.article)
      console.log("Sneakers Lot Created:", res);

      dispatch(setCurrentInfo({
        ...currentInfoEditor,
        brand: brandsList.map(b => b.name)[currentContext.brands] ?? "",
        condition: conditionsList.map(c => c.name)[currentContext.statuses] ?? "",
        color: resArticle.color,
        image: resArticle.photo_url,
        name: resArticle.model,
      }))

      setLoadingAdd(false)
      dispatch(closeDialogEditProduct())
      
    } catch (error) {
      console.error("Failed to create sneakers lot:", error);
    }
  }

  async function fillDataDialog () {
    dispatch(setCurrentInfoEditor(dataDialogEdit))
    let brand_idx = brandsList.findIndex(b => b.name === dataDialogEdit.brand)
    let condition_idx = conditionsList.findIndex(c => c.name === dataDialogEdit.condition.condition)
    dispatch(selectCurrentContext({idx: brand_idx, type: "brands"}))
    dispatch(selectCurrentContext({idx: condition_idx, type: "statuses"}))
  }


  useEffect(() => {
    loadDataDialog()
  }, [])
  useEffect(() => {
    fillDataDialog()
  }, [brandsList, conditionsList])

  return (
    <Dialog 
    closeHandler={() => dispatch(closeDialogEditProduct())} 
    onClick={sendDataHandler} 
    loading={isLoadingAdd}
    buttonText="Сохранить"
    >
      <div className="dialog__wrapper-left">
        <EditProductSearch
        article={currentInfoEditor.article}
        setArticle={articleHandler}  />
        <EditProductImages isLoadingArticle={isLoadingArticle} image={currentInfoEditor.image!} />
      </div>
      <div className="dialog__wrapper-right">
        <EditProductRight 
        brandsList={brandsList} 
        conditionsList={conditionsList}
        isLoadingArticle={isLoadingArticle}
        />
      </div>
    </Dialog>
  )
}

export default EditProductDialog
