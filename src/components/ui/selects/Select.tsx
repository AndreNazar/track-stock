import "./selects.scss"
import down_img from "../../../assets/imgs/actions/down-arrow.svg"
import Loading from "../loadings/Loading"

function Select({loading = false, ref, value, onClick}: {loading?: boolean, ref?: any, value: string, onClick? : () => void}) {

    return <div ref={ref} onClick={onClick} className="select">
        <p className="select__input">{loading?<Loading size={10} />:value}</p>
        <img className="select__image" src={down_img} alt="" />
    </div>
}

export default Select