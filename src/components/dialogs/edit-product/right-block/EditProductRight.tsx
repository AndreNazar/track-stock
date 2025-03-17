import Field from "../../../ui/fields/Field"
import locker_img from "../../../../assets/imgs/actions/locker_green.svg"
import "../../add-product/right-block/right-block.scss"
import Checkbox from "../../../ui/checkbox/Checkbox"
import SelectField from "../../../ui/selects/SelectField"
import { eBrandKeys, IDataSelect, IProducts } from "../../../../types/types"


interface IEditProductRight {
  brandsList: IDataSelect[]
  conditionsList: IDataSelect[]
  currentInfo: IProducts
  changeCurrentInfo: (key: eBrandKeys, value: string | number | boolean) => void
  isOpenBrands: boolean
  setIsOpenConditions: (value: boolean) => void
  setIsOpenBrands: (value: boolean) => void
}

function EditProductRight({
  brandsList, 
  conditionsList, 
  currentInfo, 
  changeCurrentInfo, 
  setIsOpenConditions, 
  setIsOpenBrands
}: IEditProductRight) {

  return (
    <div className="dialog__right">
      <div className="right__content">
        <div className="right__locker">
          <img className="right__locker-img" src={locker_img} alt="" />
        </div>
        <div className="right__content-field-xl"><Field disable={true} heading="Название" placeholder="..." value={currentInfo.name} setValue={(e: string) => changeCurrentInfo(eBrandKeys.name, e)} /></div>
        <div className="right__content-field-m"><Field disable={true} heading="Цвет" placeholder="..." value={currentInfo.color} setValue={(e: string) => changeCurrentInfo(eBrandKeys.color, e)} /></div>
        <div className="right__content-field-m"><Field heading="Цена покупки" placeholder="10" value={currentInfo.priceBuy} setValue={(e: string) => changeCurrentInfo(eBrandKeys.priceBuy, e)} /></div>
        <div className="right__content-field-m"><Field heading="Цена доставки" placeholder="10" value={currentInfo.priceDelivery} setValue={(e: string) => changeCurrentInfo(eBrandKeys.priceDelivery, e)} /></div>
        <div className="right__content-field-l"><SelectField data={conditionsList} openHandler={setIsOpenConditions} heading="Состояние" /></div>
        <div className="right__content-field-m"><Field heading="Размер US" placeholder="10 US" value={currentInfo.sizeUS} setValue={(e: string) => changeCurrentInfo(eBrandKeys.sizeUS, e)} /></div>
        <div className="right__content-field-m"><Field heading="Размер UK" placeholder="10 UK" value={currentInfo.sizeUK} setValue={(e: string) => changeCurrentInfo(eBrandKeys.sizeUK, e)} /></div>
        <div className="right__content-field-m"><Field heading="Размер EU" placeholder="10 EU" value={currentInfo.sizeEU} setValue={(e: string) => changeCurrentInfo(eBrandKeys.sizeEU, e)} /></div>
        <div className="right__content-field-l"><SelectField data={brandsList} openHandler={setIsOpenBrands} heading="Бренд" /></div>
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

export default EditProductRight