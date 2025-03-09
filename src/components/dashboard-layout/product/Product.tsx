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

    const [infoList, setInfoList] = useState<InfoList[]>(_infoList)
    const [cardList, setCardList] = useState<CardList[]>(_cardList)
    const [mainImg, setMainImg] = useState<null | string>(null)
    const [name, setName] = useState<null | string>(null)
    const [size, setSize] = useState<null | string>(null)
    
    useEffect(() => {
        setTimeout(() => {
            setInfoList([
                {...infoList[0], value: "Nike"}, // источник
                {...infoList[1], value: "10/07/20"}, // дата покупки
                {...infoList[2], value: "200"}, // цена покупки
                {...infoList[3], value: "20"}, // цена доставки
            ])
            setCardList([
                {...cardList[0], value: "FY5348"}, // артикул
                {...cardList[1], value: "Adidas"}, // бренд
                {...cardList[2], value: "15/04/20"}, // дата релиза
                {...cardList[3], value: "Sulfur/Sulfur/Sulfur"}, // цвет 
                {...cardList[4], value: "$220"}, //  ретейл
            ])
            setMainImg(boots_img)
            setName("Yeezy Boost 350 V2 Sulfur")
            setSize("8.5 US")
        }, 2000)
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