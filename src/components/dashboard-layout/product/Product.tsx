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
        const resImage = await api.loadProductInfo(res.sneaker.article)
        
        console.log(res)
        console.log(resImage)

        dispatch(setCurrentInfo({
            id: res.sneaker.id,
            article: res.sneaker.article,
            brand: res.sneaker.brand.brand,
            city: res.sneaker.city,
            color: res.sneaker.color,
            condition: res.sneaker.condition,
            priceBuy: res.sneaker.price_buy,
            priceSale: res.sneaker.price_sale,
            dateBuy: res.sneaker.date_buy,
            placeOfTransaction: "",
            checkedFitting: res.sneaker.fitting,
            price_goat: res.prices.goat,
            price_poison: res.prices.poizon,
            price_stockX: res.prices.stock_x,
            avg_price: res.prices.avg_price,
            sizeEU: res.sneaker.eu_size,
            sizeUK: res.sneaker.uk_size,
            sizeUS: res.sneaker.us_size,
            image: resImage.photo_url,
            name: res.sneaker.model,
            inStore: res.sneaker.in_store,
        }))
    }

    useEffect(() => {
        getProductInfo()
        dispatch(switchTab("/inventory"))
        return () => {
            dispatch(setCurrentInfo({
                id: 0,
                article: "",
                brand: "",
                city: "",
                color: "",
                condition: "",
                priceBuy: 0,
                placeOfTransaction: "",
                checkedFitting: false,
                priceSale: 0,
                dateBuy: "",
                price_goat: "",
                price_poison: "",
                price_stockX: "",
                avg_price: "",
                sizeEU: "",
                sizeUK: "",
                sizeUS: "",
                image: "",
                name: "",
                inStore: false,
            }))
        }
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
                null, // Дата продажи
                currentInfo?.priceBuy?.toString() || null, 
                currentInfo?.priceSale?.toString() || null
            ]} />
            
            
            <Statuses 
            goat={currentInfo?.price_goat!}
            poizon={currentInfo?.price_poison!} 
            stockX={currentInfo?.price_stockX!}
            inStore={currentInfo?.inStore!}
            article={currentInfo?.article!}
            />
            <Sales />
        </div>
    </div>

}

export default Product