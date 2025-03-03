import { useState } from "react"
import "./fields.scss"

function Field ({value, setValue, heading, placeholder}: {value: string, setValue: (value: string) => void, heading: string, placeholder?: string}) {

    const [isFocus, setIsFocus] = useState<boolean>(false)

    return <div className="field">
        <p className={`field__heading${isFocus ? " active" : ""}`}>{heading}</p>
        <input 
        onFocus={() => setIsFocus(true)} 
        onBlur={() => setIsFocus(false)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        type="text" className={`field__input${isFocus ? " active" : ""}`} />
    </div>
}

export default Field