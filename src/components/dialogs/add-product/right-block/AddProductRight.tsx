import Field from "../../../ui/fields/Field"
import locker_img from "../../../../assets/imgs/actions/locker_green.svg"
import "./right-block.scss"
import Checkbox from "../../../ui/checkbox/Checkbox"
import SelectField from "../../../ui/selects/SelectField"
import { eBrandKeys, IDataSelect, IProducts } from "../../../../types/types"
import { useDispatch, useSelector } from "react-redux"
import { newContextBlock } from "../../../../redux/slices/dialogSlice"
import { useEffect, useRef } from "react"


interface IAddProductRight {
  brandsList: IDataSelect[]
  conditionsList: IDataSelect[]
  currentInfo: IProducts
  changeCurrentInfo: (key: eBrandKeys, value: string | number | boolean) => void
  isLoadingArticle: boolean
}

function AddProductRight({
  brandsList, 
  conditionsList, 
  currentInfo, 
  changeCurrentInfo, 
  isLoadingArticle,
}: IAddProductRight) {

const dispatch = useDispatch()
const brandsRef = useRef<HTMLDivElement>(null)
const conditionsRef = useRef<HTMLDivElement>(null)
const currentContext = useSelector((s:any) => s.selections.currentContext)

  function openBrandsHandler() {
    console.log(brandsRef.current)
    if (brandsRef.current) {
      const rect = brandsRef.current.getBoundingClientRect()
      dispatch(
        newContextBlock({
          list: brandsList.map(b => b.name),
          title: "",
          top: rect.top,
          left: rect.left,
          width: rect.width,
          firstClick: true,
          type: "brands",
        })
      )
    }
  }
  function openConditionsHandler() {
    if (conditionsRef.current) {
      const rect = conditionsRef.current.getBoundingClientRect()
      dispatch(
        newContextBlock({
          list: conditionsList.map(c => c.name),
          title: "",
          top: rect.top,
          left: rect.left,
          width: rect.width,
          firstClick: true,
          type: "statuses"
        })
      )
    }
  }
  
  useEffect(() => {
    console.log(currentInfo.name)
  }, [currentInfo])

  return (
    <div className="dialog__right">
      <div className="right__content">
        <div className="right__locker">
          <img className="right__locker-img" src={locker_img} alt="" />
        </div>
        <div className="right__content-field-xl"><Field loading={isLoadingArticle} disable={true} heading="Название" placeholder={isLoadingArticle?"...":""} value={currentInfo.name} setValue={(e: string) => changeCurrentInfo(eBrandKeys.name, e)} /></div>
        <div className="right__content-field-m"><Field loading={isLoadingArticle} disable={true} heading="Цвет" placeholder={isLoadingArticle?"...":""} value={currentInfo.color} setValue={(e: string) => changeCurrentInfo(eBrandKeys.color, e)} /></div>
        <div className="right__content-field-m"><Field heading="Цена покупки" placeholder="10" value={currentInfo.priceBuy} setValue={(e: string) => changeCurrentInfo(eBrandKeys.priceBuy, e)} /></div>
        <div className="right__content-field-m"><Field heading="Цена доставки" placeholder="10" value={currentInfo.priceDelivery} setValue={(e: string) => changeCurrentInfo(eBrandKeys.priceDelivery, e)} /></div>
        <div className="right__content-field-l"><SelectField ref={conditionsRef} value={conditionsList.map(l => l.name)[currentContext.statuses]} onClick={openConditionsHandler} heading="Состояние" /></div>
        <div className="right__content-field-m"><Field heading="Размер US" placeholder="10 US" value={currentInfo.sizeUS} setValue={(e: string) => changeCurrentInfo(eBrandKeys.sizeUS, e)} /></div>
        <div className="right__content-field-m"><Field heading="Размер UK" placeholder="10 UK" value={currentInfo.sizeUK} setValue={(e: string) => changeCurrentInfo(eBrandKeys.sizeUK, e)} /></div>
        <div className="right__content-field-m"><Field heading="Размер EU" placeholder="10 EU" value={currentInfo.sizeEU} setValue={(e: string) => changeCurrentInfo(eBrandKeys.sizeEU, e)} /></div>
        <div className="right__content-field-l"><SelectField ref={brandsRef} value={brandsList.map(l => l.name)[currentContext.brands]} onClick={openBrandsHandler} heading="Бренд" /></div>
        <div className="right__content-field-m"><Field heading="Город" placeholder="Москва" value={currentInfo.city} setValue={(e: string) => changeCurrentInfo(eBrandKeys.city, e)} /></div>
        <div className="right__content-field-m"><Field heading="Место сделки" placeholder="м. Белорусская" value={currentInfo.placeOfTransaction} setValue={(e: string) => changeCurrentInfo(eBrandKeys.placeOfTransaction, e)} /></div>
        <div onClick={() => changeCurrentInfo(eBrandKeys.checkedFitting, !currentInfo.checkedFitting)} className="right__content-checkbox">
          <Checkbox checked={currentInfo.checkedFitting} setChecked={() => changeCurrentInfo(eBrandKeys.checkedFitting, !currentInfo.checkedFitting)} />
          <p>Есть примерка</p>
        </div>
      </div>
    </div>
  )
}

export default AddProductRight