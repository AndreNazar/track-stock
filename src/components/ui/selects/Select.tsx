import "./selects.scss"
import down_img from "../../../assets/imgs/actions/down-arrow.svg"

function Select({ref, value, onClick}: {ref?: any, value: string, onClick? : () => void}) {

    return <div ref={ref} onClick={onClick} className="select">
        <input className="select__input" type="text" placeholder="Выберите" value={value} />
        <img className="select__image" src={down_img} alt="" />
    </div>
}

export default Select