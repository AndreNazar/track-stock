import Field from "../../../ui/fields/Field"
import locker_img from "../../../../assets/imgs/actions/locker_green.svg"
import "../../add-product/right-block/right-block.scss"
import Checkbox from "../../../ui/checkbox/Checkbox"
import SelectField from "../../../ui/selects/SelectField"
import { eBrandKeys, IDataSelect } from "../../../../types/types"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { newContextBlock, setCalendarData } from "../../../../redux/slices/dialogSlice"
import { changeCurrentInfoEditor } from "../../../../redux/slices/productSlice"
import FieldCalendar from "../../../ui/fields/FieldCalendar"
import { format } from "date-fns"


interface IEditProductRight {
  brandsList: IDataSelect[]
  conditionsList: IDataSelect[]
  isLoadingArticle: boolean
}

function EditProductRight({
  brandsList, 
  conditionsList, 
  isLoadingArticle,
}: IEditProductRight) {
  const dispatch = useDispatch()
  const brandsRef = useRef<HTMLDivElement>(null)
  const conditionsRef = useRef<HTMLDivElement>(null)
  const currentContext = useSelector((s:any) => s.selections.currentContext)
  const currentInfoEditor = useSelector((s:any) => s.product.currentInfoEditor)
  const calendarData = useSelector((s:any) => s.dialog.calendarData)

  
  const handleInputClick = () => {
    dispatch(setCalendarData({date: format(new Date(), 'yyyy-dd-MM'), isOpen:true}))
  }

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

  return (
    <div className="dialog__right">
      <div className="right__content">
        <div className="right__locker">
          <img className="right__locker-img" src={locker_img} alt="" />
        </div>
        <div className="right__content-field-xl"><Field loading={isLoadingArticle} disable={true} heading="Название" placeholder={!isLoadingArticle?"...":""} value={currentInfoEditor.name} setValue={(e: string) => dispatch(changeCurrentInfoEditor({key: eBrandKeys.name, value: e}))} /></div>
        <div className="right__content-field-m"><Field loading={isLoadingArticle} disable={true} heading="Цвет" placeholder={!isLoadingArticle?"...":""} value={currentInfoEditor.color} setValue={(e: string) => dispatch(changeCurrentInfoEditor({key: eBrandKeys.color, value: e}))} /></div>
        <div className="right__content-field-m"><Field heading="Цена покупки" placeholder="10" value={currentInfoEditor.priceBuy} setValue={(e: string) => dispatch(changeCurrentInfoEditor({key: eBrandKeys.priceBuy, value: e}))} /></div>
        <div className="right__content-field-m date-picker-container">
          <FieldCalendar heading="Дата покупки" value={calendarData.date} onClick={handleInputClick} />
        </div>        
        <div className="right__content-field-l"><SelectField ref={conditionsRef} value={conditionsList.map(l => l.name)[currentContext.statuses]} onClick={openConditionsHandler} heading="Состояние" /></div>
        <div className="right__content-field-m"><Field heading="Размер US" placeholder="10 US" value={currentInfoEditor.sizeUS} setValue={(e: string) => dispatch(changeCurrentInfoEditor({key: eBrandKeys.sizeUS, value: e}))} /></div>
        <div className="right__content-field-m"><Field heading="Размер UK" placeholder="10 UK" value={currentInfoEditor.sizeUK} setValue={(e: string) => dispatch(changeCurrentInfoEditor({key: eBrandKeys.sizeUK, value: e}))} /></div>
        <div className="right__content-field-m"><Field heading="Размер EU" placeholder="10 EU" value={currentInfoEditor.sizeEU} setValue={(e: string) => dispatch(changeCurrentInfoEditor({key: eBrandKeys.sizeEU, value: e}))} /></div>
        <div className="right__content-field-l"><SelectField ref={brandsRef} value={brandsList.map(l => l.name)[currentContext.brands]} onClick={openBrandsHandler} heading="Бренд" /></div>
        <div className="right__content-field-m"><Field heading="Город" placeholder="Москва" value={currentInfoEditor.city} setValue={(e: string) => dispatch(changeCurrentInfoEditor({key: eBrandKeys.city, value: e}))} /></div>
        <div className="right__content-field-m"><Field heading="Место сделки" placeholder="м. Белорусская" value={currentInfoEditor.placeOfTransaction} setValue={(e: string) => dispatch(changeCurrentInfoEditor({key: eBrandKeys.placeOfTransaction, value: e}))} /></div>
        <div onClick={() => dispatch(changeCurrentInfoEditor({key: eBrandKeys.checkedFitting, value: !currentInfoEditor.checkedFitting}))} className="right__content-checkbox">
          <Checkbox checked={currentInfoEditor.checkedFitting} setChecked={() => dispatch(changeCurrentInfoEditor({key: eBrandKeys.checkedFitting, value: !currentInfoEditor.checkedFitting}))} />
          <p>Есть примерка</p>
        </div>
      </div>
    </div>
  )
}

export default EditProductRight