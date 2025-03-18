import "./context-list.scss"
import { useDispatch } from "react-redux"
import { closeContextBlock } from "../../../redux/slices/dialogSlice"
import { IContextBlock } from "../../../types/types"
import { selectCurrentContext } from "../../../redux/slices/selectionsSlice"
import { useEffect, useRef, useState } from "react"


function ContextList({ list, left, top, width }: IContextBlock) {

  const dispatch = useDispatch()
  const blockRef = useRef<HTMLDivElement>(null)
  const [firstClick, setFirstClick] = useState<boolean>(true)

  function selectItem(idx: number) {
    dispatch(selectCurrentContext(idx))
    dispatch(closeContextBlock())
  }

  
  function handleClickOutside(event: MouseEvent) {
    console.log(firstClick)
    if (firstClick) {
      setFirstClick(false)
      return
    }
    if (blockRef.current && !blockRef.current.contains(event.target as Node)) {
      dispatch(closeContextBlock())
    }
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => handleClickOutside(e);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [firstClick])

  return (
    <div style={{
      top: top + 40,
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