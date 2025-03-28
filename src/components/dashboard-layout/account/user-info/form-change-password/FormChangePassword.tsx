import { useState } from "react"
import Field from "../../../../ui/fields/Field"
import "./form-change-password.scss"
import FieldPassword from "../../../../ui/fields/FieldPassword"
import ButtonDash from "../../../../ui/buttons/ButtonDash"
import "./form-change-password.scss"
import Api from "../../../../../api/api"
import { showPopapStatus } from "../../../../../redux/slices/dialogSlice"
import { useDispatch } from "react-redux"

function FormChangePassword() {
  const api = new Api()
  
  const [prevPassword, setPrevPassword] = useState<string>("")
  const [newPassword, setNewPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const dispatch = useDispatch()

  function updatePasswordHandler() {
    if (newPassword === confirmPassword) {
      api
        .updateUserPassword({
          old_password: prevPassword,
          new_password: newPassword,
        })
        .then((res) => {
          console.log(res)
        }).catch((err) => {
          dispatch(showPopapStatus({text: `Ошибка: ${err}`, status: "error"}))
        })
    } else {
      dispatch(showPopapStatus({text: `Ошибка: Пароли не совпадают`, status: "error"}))
    }
  }

  return (
    <div className="form-change-password">
      <div className="form-change-password__inputs">
        <Field heading="Старый пароль" placeholder="Введите пароль" value={prevPassword} setValue={setPrevPassword} />
        <FieldPassword heading="Новый пароль" placeholder="Введите пароль" value={newPassword} setValue={setNewPassword} />
        <FieldPassword heading="Подтвердите пароль" placeholder="Введите пароль" value={confirmPassword} setValue={setConfirmPassword} />
        <ButtonDash onClick={updatePasswordHandler} color="#6FCF97">
          Сменить пароль
        </ButtonDash>
      </div>
    </div>
  )
}

export default FormChangePassword
