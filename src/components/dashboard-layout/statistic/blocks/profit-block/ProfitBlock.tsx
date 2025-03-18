import { useDispatch, useSelector } from "react-redux"
import SelectText from "../../../../ui/selects/SelectText"
import "./profit-block.scss"
import { newContextBlock } from "../../../../../redux/slices/dialogSlice"
import { useRef } from "react"
import GraphicBar from "./graphic/GraphicBar"
import PropertyBlock from "./property-block/PropertyBlock"

function ProfitBlock() {
  const dispatch = useDispatch()
  const titleRef = useRef<HTMLDivElement>(null)
  const currentTitle = useSelector((s: any) => s.selections.currentContext)
  const listTitles = ["Аналитика продаж", "Аналитика прибыли"]

  function openContext() {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect()
      dispatch(
        newContextBlock({
          list: listTitles,
          title: "",
          top: rect.top,
          left: rect.left,
          width: rect.width,
        })
      )
    }
  }

  
  return (
    <div className="profit-block">
      <div ref={titleRef} className="profit-block__title">
        <SelectText title={listTitles[currentTitle]} onClick={openContext} />
        <p className="profit-block__title-date">6 сент. - 13 сент. 2020 г.</p>
      </div>
      <GraphicBar />
      <PropertyBlock/>
    </div>
  )
}

export default ProfitBlock
