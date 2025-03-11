import "./selects.scss"
import down_img from "../../../assets/imgs/actions/down-arrow.svg"

function Select({data}: {data: string[]}) {

    return <div className="select">
        <input className="select__input" disabled type="text" placeholder="Выберите" value={data[0]} />
        <img className="select__image" src={down_img} alt="" />
    </div>
}

export default Select