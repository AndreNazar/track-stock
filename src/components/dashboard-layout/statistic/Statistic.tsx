import { useDispatch } from "react-redux"
import "./statistic.scss"
import { useEffect } from "react"
import { switchTab } from "../../../redux/slices/menuSlice"

function Statistic(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(switchTab("/statistic"))
    }, [])

    return <div>Statistic</div>
}

export default Statistic