import { useDispatch, useSelector } from "react-redux"
import { newContextBlock } from "../../../../../../redux/slices/dialogSlice"
import SelectText from "../../../../../ui/selects/SelectText"
import "./analysis-size.scss"
import { useRef } from "react"
import AnalysisSizeItem from "./item/AnalysisSizeItem"

function AnalysisSize() {
  const dispatch = useDispatch()
  const titleRef = useRef<HTMLDivElement | null>(null)
  const listTitles = ["Анализ размеров по инвентарю", "Анализ размеров по продажам"]
  const currentTitle = useSelector((s: any) => s.selections.currentContext)
  const sizesRating = [
    {id: 1, size: 10, percent: 50},
    {id: 2, size: 15, percent: 25},
    {id: 3, size: 20, percent: 15},
    {id: 4, size: 25, percent: 5},
    {id: 5, size: 17, percent: 3},
    {id: 6, size: 12, percent: 2},
  ]

  function openContext() {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect()
      dispatch(
        newContextBlock({
          list: listTitles,
          title: "",
          top: document.documentElement.scrollTop + rect.top,
          left: rect.left,
          width: rect.width,
        })
      )
    }
  }

  return (
    <div ref={titleRef} className="analysis-sizes">
      <SelectText title={listTitles[currentTitle]} onClick={openContext} />
      <ul className="analysis-sizes__list">
        {sizesRating.map(s => <li className="analysis-sizes__item">
          <AnalysisSizeItem info={s} />
        </li>)}
      </ul>
    </div>
  )
}

export default AnalysisSize
