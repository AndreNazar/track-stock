import "./context-list.scss"
import { useDispatch } from "react-redux"
import { closeContextBlock, firstClickContextBlock } from "../../../redux/slices/dialogSlice"
import { IContextBlock } from "../../../types/types"
import { useEffect, useRef, useState } from "react"
import { selectCurrentContext } from "../../../redux/slices/selectionsSlice"


function ContextList({ list, left, top, width, type, firstClick }: IContextBlock ) {

  const dispatch = useDispatch()
  const blockRef = useRef<HTMLDivElement>(null)
  const [blockTop, setBlockTop] = useState<number>(top + 40)

  function selectItem(idx: number) {
    dispatch(selectCurrentContext({idx, type}))
    dispatch(closeContextBlock())
    setBlockTop(top + 40)
  }

  
  function handleClickOutside(event: MouseEvent) {
    console.log(firstClick)
    if (firstClick) {
      dispatch(firstClickContextBlock())
      return
    }
    if (blockRef.current && !blockRef.current.contains(event.target as Node)) {
      dispatch(closeContextBlock())
      setBlockTop(top + 40)
    }
  }

  const calculateTop = () => {
    const blockHeight = blockRef.current?.clientHeight || 0
    const bodyHeight = document.body.scrollHeight

    console.log(blockTop)
    
    if (blockTop + blockHeight > bodyHeight) {
      setBlockTop(window.innerHeight - blockHeight)
    } else {
      setBlockTop(top + 40)
    }
  }
  useEffect(() => {
    const handleClick = (e: Event) => handleClickOutside(e as MouseEvent);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [firstClick])

  useEffect(() => {
    calculateTop()
  }, [firstClick])

  return (
    <div style={{
      top: blockTop,
      left: left,
      width: width,
      transform: "translate(0%, 0%)"
    }} ref={blockRef} className="context-menu">
      <ul className="context-menu__list">
        {list.map((item: string, i: number) => (
          <li key={i} onClick={() => selectItem(i)} className="context-menu__item">
            <p className="context-menu__item-text">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContextList