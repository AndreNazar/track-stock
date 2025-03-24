import { useState } from "react"


interface IFieldCalendar {
    value: string
    heading: string
    onClick: () => void
}


function FieldCalendar({heading, value, onClick}: IFieldCalendar) {

  const [isFocus, setIsFocus] = useState<boolean>(false)

  return (<div className="field">
    <p className={`field__heading${isFocus ? " active" : ""}`}>{heading}</p>
    <input 
    onFocus={() => setIsFocus(true)} 
    onBlur={() => setIsFocus(false)}
    defaultValue={value}
    placeholder="Выберите дату"
    onClick={onClick}
    readOnly
    type="text" 
    className={`field__input${isFocus ? " active" : ""}`} />
</div>
  )
}

export default FieldCalendar