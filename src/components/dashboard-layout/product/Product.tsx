import { useNavigate } from "react-router"
import back_svg from "../../../assets/imgs/control/back.svg"
import "./product.scss"
import Info from "./components/info/Info"
import brand_png from "../../../assets/imgs/actions/brand.png"
import date_png from "../../../assets/imgs/actions/date.png"
import price_png from "../../../assets/imgs/actions/price.png"
import { useEffect, useState } from "react"
import Card from "./components/card/Card"
import { CardList, InfoList } from "../../../types/types"
import boots_img from "../../../assets/imgs/boots/boots2.png"
import Statuses from "./components/statuses/Statuses"
import Sales from "./components/sales/Sales"
import api from "../../../api/api"
import { useParams } from "react-router"

const _infoList: InfoList[] = [
    {
        title: "Источник",
        value: null,
        img: brand_png
    },
    {
        title: "Дата покупки",
        value: null,
        img: date_png
    },
    {
        title: "Цена покупки",
        value: null,
        img: price_png
    },
    {
        title: "Цена доставки",
        value: null,
        img: price_png
    }
]
const _cardList: CardList[] = [
    {title: "Артикул", value: null},
    {title: "Бренд", value: null},
    {title: "Дата релиза", value: null},
    {title: "Цвет", value: null},
    {title: "Ретейл", value: null},
]

function Product (){

    const navigate = useNavigate()
    const params = useParams()

    const [infoList, setInfoList] = useState<InfoList[]>(_infoList)
    const [cardList, setCardList] = useState<CardList[]>(_cardList)
    const [mainImg, setMainImg] = useState<null | string>(null)
    const [name, setName] = useState<null | string>(null)
    const [size, setSize] = useState<null | string>(null)
    
    async function getProductInfo() {
        const res = await api.getSneakerById(+params.product_id!)

        console.log(res)
        
        setInfoList([
            {...infoList[0], value: res.brand.brand}, // источник
            {...infoList[1], value: ""}, // дата покупки
            {...infoList[2], value: res.price}, // цена покупки
            {...infoList[3], value: res.price}, // цена доставки
        ])
        setCardList([
            {...cardList[0], value: res.article}, // артикул
            {...cardList[1], value: res.brand.brand}, // бренд
            {...cardList[2], value: "15/04/20"}, // дата релиза
            {...cardList[3], value: res.color}, // цвет 
            {...cardList[4], value: ""}, //  ретейл
        ])
        //setMainImg(boots_img)
        setName(res.model)
        setSize(res.us_size + " US")
    }

    useEffect(() => {
        getProductInfo()
    }, [])

    return <div className="product">
        <div className="product__back">
            <button onClick={() => navigate(-1)} className="product__back-button">
                <img src={back_svg} alt="" />
            </button>
        </div>
        <div className="product__wrapper">
            <Card cardList={cardList} mainImg={mainImg} name={name} size={size}/>
            <Info infoList={infoList}/>
            <Statuses />
            <Sales />
        </div>
    </div>

}

export default Product