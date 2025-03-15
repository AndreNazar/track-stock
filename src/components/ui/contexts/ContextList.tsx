import "./context-list.scss"
import close_img from "../../../assets/imgs/control/cross.svg"

interface IContextList {
  title: string
  list: string[]
  setList: (idx: number) => void
  setIsOpenBrands: (value: boolean) => void
}

function ContextList({ title, list, setList, setIsOpenBrands }: IContextList) {

  function selectItem(idx: number) {
    setList(idx)
    setIsOpenBrands(false)
  }

  return (
    <div className="context-menu">
      <div className="context-menu__header">
        <p className="context-menu__header-title">{title}</p>
        <img onClick={() => setIsOpenBrands(false)} className="context-menu__header-close" src={close_img} alt="" />
      </div>
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
