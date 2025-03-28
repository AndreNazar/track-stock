import { useState } from "react"
import "./fields.scss"
import Loading from "../loadings/Loading"



interface IField {
    value: string | number
    setValue: ((value: string) => void)
    heading: string
    placeholder: string
    disable?: boolean
    loading?: boolean
}

function Field ({value, setValue, heading, placeholder, disable = false, loading = false}: IField) {

    const [isFocus, setIsFocus] = useState<boolean>(false)

    return <div className="field">
        <p className={`field__heading${isFocus ? " active" : ""}`}>{heading}</p>
        <input 
        onFocus={() => setIsFocus(true)} 
        onBlur={() => setIsFocus(false)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        disabled={disable}
        type="text" className={`field__input${isFocus ? " active" : ""}`} />
        {loading && <Loading size={14} />}
    </div>
}

export default Field