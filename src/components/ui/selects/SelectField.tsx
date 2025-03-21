import "./selects.scss"
import down_img from "../../../assets/imgs/actions/down-arrow.svg"
import { useState } from "react"

interface ISelectField {
    value: string
    heading: string
    onClick: () => void
    ref?: React.RefObject<HTMLDivElement | null>
}

function SelectField({value, heading, onClick, ref}: ISelectField) {

    const [isFocus, setIsFocus] = useState<boolean>(false)

    function focusInput() {
        setIsFocus(true)
        onClick()
    }

    return <div className="select-field" ref={ref}>
        <p className={`field__heading${isFocus ? " active" : ""}`}>{heading}</p>
        <input
        onClick={() => focusInput()} 
        onBlur={() => setIsFocus(false)}
        onChange={() => {}}
        className="select-field__input" 
        type="text" 
        placeholder="Выберите" 
        value={value || "Выберите"} 
        />
        <img onClick={focusInput}  className="select-field__image" src={down_img} alt="" />
    </div>
}

export default SelectField