import { CardList, IProducts } from "../../../../../types/types"
import Loading from "../../../../ui/loadings/Loading"
import Property from "../../../../ui/property/Property"
import "./card.scss"
import trash_png from "../../../../../assets/imgs/control/trash.svg"
import edit_png from "../../../../../assets/imgs/control/edit_2.svg"
import { openDialogDeleteProduct, openDialogEditProduct } from "../../../../../redux/slices/dialogSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"


function Card() {

    const dispatch = useDispatch()
    const currentInfo: IProducts = useSelector((s:any) => s.product.currentInfo)
    const [cardList, setCardList] = useState<CardList[]>([
        {title: "Артикул", value: null},
        {title: "Бренд", value: null},
        {title: "Дата релиза", value: null},
        {title: "Цвет", value: null},
        {title: "Ретейл", value: null},
    ])

    function editProductHandler() {
        if(currentInfo){
            dispatch(openDialogEditProduct({...currentInfo}))        
        }
    }
    function delteProductHandler() {
        if(currentInfo){
            dispatch(openDialogDeleteProduct({id: currentInfo.id, name: currentInfo.name}))      
        }
    }

    useEffect(() => {
        setCardList([
            {title: "Артикул", value: currentInfo?.article ?? null},
            {title: "Бренд", value: currentInfo?.brand ?? null},
            {title: "Дата релиза", value: currentInfo?.release_date ?? null},
            {title: "Цвет", value: currentInfo?.color ?? null},
            {title: "Ретейл", value: null},
        ])
    }, [currentInfo])

    return <div className="product__card">
        <div className="card__icon">
            {currentInfo?.image ? <img src={currentInfo.image} alt="" className="card__icon-main-img" /> : <Loading />}
        </div>
        <div className="card__info">
            {cardList[0].value 
            ? <>
                <p className="card__info-name">{currentInfo?.name}</p>
                <p className="card__info-size">{currentInfo?.sizeEU}</p>
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
            <img onClick={() => delteProductHandler()} src={trash_png} alt="" className="card__control-trash" />
            <img onClick={() => editProductHandler()} src={edit_png} alt="" className="card__control-edit" />
        </div>
    </div>
}

export default Card