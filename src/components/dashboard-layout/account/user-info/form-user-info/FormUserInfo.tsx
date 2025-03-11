import { useState } from "react"
import Field from "../../../../ui/fields/Field"
import ButtonDash from "../../../../ui/buttons/ButtonDash"
import "./form-user-info.scss"

function FormUserInfo () {

    const [name, setName] = useState<string>("")

    return (
        <div className="form-user-info">
            <div className="form-user-info__inputs">
                <Field heading="Имя" placeholder="Имя" setValue={setName} value={name}/>
                <Field heading="Фамилия" placeholder="Фамилия" setValue={setName} value={name}/>
                <Field heading="Никнейм" placeholder="Никнейм" setValue={setName} value={name}/>
                <Field heading="e-Mail" placeholder="example@inbox.com" setValue={setName} value={name}/>
                <Field heading="Номер телефона" placeholder="+7 999 999 99 99" setValue={setName} value={name}/>
                <div className="form-user-info__button">
                    <ButtonDash color="#6FCF97">Сохранить данные</ButtonDash>
                </div>
            </div>
        </div>
    )
}

export default FormUserInfo