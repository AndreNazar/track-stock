import { CardList, IProducts } from "../../../../../types/types"
import Loading from "../../../../ui/loadings/Loading"
import Property from "../../../../ui/property/Property"
import "./card.scss"
import trash_png from "../../../../../assets/imgs/control/trash.svg"
import edit_png from "../../../../../assets/imgs/control/edit_2.svg"
import { openDialogEditProduct } from "../../../../../redux/slices/dialogSlice"
import { useDispatch } from "react-redux"

interface CardProps {
    dataProduct: IProducts | null
}

function Card({dataProduct}: CardProps) {

    const dispatch = useDispatch()

    const cardList: CardList[] = [
        {title: "Артикул", value: dataProduct?.article ?? null},
        {title: "Бренд", value: dataProduct?.brand ?? null},
        {title: "Дата релиза", value: dataProduct?.release_date ?? null},
        {title: "Цвет", value: dataProduct?.color ?? null},
        {title: "Ретейл", value: null},
    ]

    function editProductHandler() {
        if(dataProduct){
            dispatch(openDialogEditProduct({...dataProduct}))        
        }
    }

    return <div className="product__card">
        <div className="card__icon">
            {dataProduct?.image ? <img src={dataProduct.image} alt="" className="card__icon-main-img" /> : <Loading />}
        </div>
        <div className="card__info">
            {cardList[0].value 
            ? <>
                <p className="card__info-name">{dataProduct?.name}</p>
                <p className="card__info-size">{dataProduct?.sizeEU}</p>
                <ul className="card__property-list">
                    {cardList.map((p:CardList) => <li key={p.title} className="card__property-item">
                        <Property title={p.title} value={p.value} />
                    </li>)}
                </ul>
            </>
            : <Loading size={30} />
            }
        </div>
        
        <div className="card__control">
            <img src={trash_png} alt="" className="card__control-trash" />
            <img onClick={() => editProductHandler()} src={edit_png} alt="" className="card__control-edit" />
        </div>
    </div>
}

export default Card