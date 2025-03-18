import { useDispatch } from "react-redux"
import "./statistic.scss"
import { useCallback, useEffect, useState } from "react"
import { switchTab } from "../../../redux/slices/menuSlice"
import { AnalysisBlock, PriceInfo, ProfitBlock, SalesBlock } from "./blocks"

function Statistic(){

    const dispatch = useDispatch()
    const [currentTab, setCurrentTab] = useState(0)

    const checkTab = useCallback((tab: number) => {
        if(tab === currentTab) return " statistic__tab--active"
        else return ""
    }, [currentTab])


    useEffect(() => {
        dispatch(switchTab("/statistic"))
    }, [])

    return <div className="statistic">
        <div className="statistic__tabs">
            <div onClick={() => setCurrentTab(0)} className={"statistic__tab" + checkTab(0)}><p>Все время</p></div>
            <div onClick={() => setCurrentTab(1)} className={"statistic__tab" + checkTab(1)}><p>Год</p></div>
            <div onClick={() => setCurrentTab(2)} className={"statistic__tab" + checkTab(2)}><p>Месяц</p></div>
            <div onClick={() => setCurrentTab(3)} className={"statistic__tab" + checkTab(3)}><p>Неделя</p></div>
        </div>
        <div className="statistic__content">
            <ProfitBlock />
            <PriceInfo />
            <SalesBlock />
            <AnalysisBlock />
        </div>
    </div>
}

export default Statistic