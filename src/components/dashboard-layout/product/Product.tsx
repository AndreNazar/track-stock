import { useNavigate } from "react-router"
import back_svg from "../../../assets/imgs/control/back.svg"
import "./product.scss"
import Info from "./components/info/Info"
import { useEffect } from "react"
import Card from "./components/card/Card"
import { IProducts } from "../../../types/types"
import Statuses from "./components/statuses/Statuses"
import Sales from "./components/sales/Sales"
import { Api } from "../../../api/api"
import { useParams } from "react-router"
import { switchTab } from "../../../redux/slices/menuSlice"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentInfo } from "../../../redux/slices/productSlice"


function Product (){

    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()
    
    const currentInfo: IProducts = useSelector((s:any) => s.product.currentInfo)
    
    async function getProductInfo() {
        const api = new Api()
        const res = await api.getSneakerById(+params.product_id!)
        const resImage = await api.loadProductInfo(res.article)
        

        dispatch(setCurrentInfo({
            id: res.id,
            article: res.article,
            brand: res.brand.brand,
            city: res.city,
            color: res.color,
            condition: res.condition,
            priceBuy: res.price,
            placeOfTransaction: "",
            checkedFitting: res.fitting,
            priceDelivery: res.price,
            price_goat: "",
            price_outofstock: "",
            price_poison: "",
            price_stockX: "",
            release_date: "",
            sizeEU: res.eu_size,
            sizeUK: res.uk_size,
            sizeUS: res.us_size,
            image: resImage.photo_url,
            name: res.model,
        }))
    }

    useEffect(() => {
        getProductInfo()
        dispatch(switchTab("/inventory"))
    }, [])
    

    return <div className="product">
        <div className="product__back">
            <button onClick={() => navigate(-1)} className="product__back-button">
                <img src={back_svg} alt="" />
            </button>
        </div>
        <div className="product__wrapper">
            <Card/>
            <Info info={[
                currentInfo?.brand || null, 
                currentInfo?.release_date || null, 
                currentInfo?.priceBuy.toString() || null, 
                currentInfo?.priceDelivery.toString() || null
            ]} />
            
            
            <Statuses />
            <Sales />
        </div>
    </div>

}

export default Product