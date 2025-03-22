import "./selects.scss"
import down_img from "../../../assets/imgs/actions/down-arrow.svg"

function Select({value, onClick}: {value: string, onClick? : () => void}) {

    return <div onClick={onClick} className="select">
        <input className="select__input" type="text" placeholder="Выберите" value={value} />
        <img className="select__image" src={down_img} alt="" />
    </div>
}

export default Select