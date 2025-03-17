import { useNavigate } from "react-router"
import back_svg from "../../../assets/imgs/control/back.svg"
import "./product.scss"
import Info from "./components/info/Info"
import { useEffect, useState } from "react"
import Card from "./components/card/Card"
import { CardList, InfoList, IProducts } from "../../../types/types"
import Statuses from "./components/statuses/Statuses"
import Sales from "./components/sales/Sales"
import { Api } from "../../../api/api"
import { useParams } from "react-router"
import Loading from "../../ui/loadings/Loading"


function Product (){

    const navigate = useNavigate()
    const params = useParams()

    const [dataProduct, setDataProduct] = useState<IProducts | null>(null)
    
    async function getProductInfo() {
        const api = new Api()
        const res = await api.getSneakerById(+params.product_id!)

        console.log(res)

        setDataProduct({
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
            image: res.photo_url,
            name: res.model,
        })
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
            <Card dataProduct={dataProduct}/>
            <Info info={[
                dataProduct?.brand || null, 
                dataProduct?.release_date || null, 
                dataProduct?.priceBuy.toString() || null, 
                dataProduct?.priceDelivery.toString() || null
            ]} />
            
            
            <Statuses />
            <Sales />
        </div>
    </div>

}

export default Product