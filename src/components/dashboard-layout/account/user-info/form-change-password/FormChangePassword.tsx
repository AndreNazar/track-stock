import { useState } from "react"
import Field from "../../../../ui/fields/Field"
import "./form-change-password.scss"
import FieldPassword from "../../../../ui/fields/FieldPassword"
import ButtonDash from "../../../../ui/buttons/ButtonDash"
import "./form-change-password.scss"

function FormChangePassword() {

    const [prevPassword, setPrevPassword] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")

  return (
    <div className="form-change-password">
        <div className="form-change-password__inputs">
            <Field heading="Старый пароль" placeholder="Введите пароль" value={prevPassword} setValue={setPrevPassword} />
            <FieldPassword heading="Новый пароль" placeholder="Введите пароль" value={newPassword} setValue={setNewPassword} />
            <FieldPassword heading="Подтвердите пароль" placeholder="Введите пароль" value={confirmPassword} setValue={setConfirmPassword} />
            <ButtonDash onClick={() => {}} color="#6FCF97">Сменить пароль</ButtonDash>
        </div>
    </div>
  )
}

export default FormChangePassword