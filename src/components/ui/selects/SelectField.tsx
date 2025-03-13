import "./selects.scss"
import down_img from "../../../assets/imgs/actions/down-arrow.svg"
import { useState } from "react"

function SelectField({data, heading, }: {data: string[], heading: string}) {
    const [isFocus, setIsFocus] = useState<boolean>(false)

    function focusInput() {
        setIsFocus(true)

    }

    return <div className="select-field">
        <p className={`field__heading${isFocus ? " active" : ""}`}>{heading}</p>
        <input
        onFocus={() => focusInput()} 
        onBlur={() => setIsFocus(false)} 
        className="select-field__input" 
        type="text" 
        placeholder="Выберите" 
        value={data[0]} 
        />
        <img onClick={() => focusInput()}  className="select-field__image" src={down_img} alt="" />
    </div>
}

export default SelectField