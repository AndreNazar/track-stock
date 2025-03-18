import "./selects.scss"
import down_img from "../../../assets/imgs/actions/down-arrow.svg"

function SelectText({title, onClick, ref}: {title: string, onClick: () => void, ref?: React.RefObject<HTMLDivElement | null>}) {
  return (
    <div ref={ref} className="select-text" onClick={onClick}>
      <p className="select-text__title">{title}</p>
      <img className="select-text__image" src={down_img} alt="" />
    </div>
  )
}

export default SelectText
