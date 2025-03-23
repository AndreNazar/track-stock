import "../selects/selects.scss"

function FieldCircle({placeholder, value, onChange}: {placeholder: string, value: string, onChange : (e: React.ChangeEvent<HTMLInputElement>) => void}) {

    return <div style={{cursor: "cell"}} className="field-circle select">
        <input onChange={onChange} className="select__input" type="text" placeholder={placeholder} value={value} />
    </div>
}

export default FieldCircle