import "./selects.scss"
import down_img from "../../../assets/imgs/actions/down-arrow.svg"
import { useState } from "react"
import { IDataSelect } from "../../../types/types"

interface ISelectField {
    data: IDataSelect[]
    heading: string
    openHandler: (value: boolean) => void
}

function SelectField({data, heading, openHandler}: ISelectField) {

    const [isFocus, setIsFocus] = useState<boolean>(false)

    function focusInput() {
        setIsFocus(true)
        openHandler(true)
    }

    return <div className="select-field">
        <p className={`field__heading${isFocus ? " active" : ""}`}>{heading}</p>
        <input
        onFocus={() => focusInput()} 
        onBlur={() => setIsFocus(false)}
        onChange={() => {}}
        className="select-field__input" 
        type="text" 
        placeholder="Выберите" 
        value={data.find(el => el.selected)?.name || "Выберите"} 
        />
        <img onClick={() => focusInput()}  className="select-field__image" src={down_img} alt="" />
    </div>
}

export default SelectField