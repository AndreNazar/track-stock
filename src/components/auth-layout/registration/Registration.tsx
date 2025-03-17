import { NavLink, useNavigate } from "react-router-dom"
import Button from "../../ui/buttons/Button"
import Field from "../../ui/fields/Field"
import Checkbox from "../../ui/checkbox/Checkbox"
import "./registration.scss"
import FieldPassword from "../../ui/fields/FieldPassword"
import { useEffect, useState } from "react"
import api, { Api } from "../../../api/api"
import Loading from "../../ui/loadings/Loading"

function Registration({setIsGlobalLoading}:any) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string | null>("")
  const [isError, setIsError] = useState<boolean>(false)
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [link, setLink] = useState<string>("")

  const [checked, setChecked] = useState<boolean>(false)
  const [nickname, setNickname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [telegram, setTelegram] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [repeatPassword, setRepeatPassword] = useState<string>("")
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) navigate("/inventory")
  }, [])

  const checkRightFields = () => {
    if (nickname && email && telegram && password && repeatPassword) {
        if(password === repeatPassword) {
          return true
        } else {
          setMessage("Пароли не совпадают")
          setIsError(true)
          return false
        }
      return true
    } else {
      setMessage("Заполните все поля")
      setIsError(true)
      return false
    }
  }

  const clickSubmit = async () => {
    setIsLoading(true)
    setMessage(null)
    setIsError(false)

    if (!checkRightFields()) return

    const data = {
      user_name: nickname,
      email: email,
      telegram: telegram,
      password: password,
    }

    try {
      const api = new Api()
      const response = await api.signUp(data)
      if (response.message) {
        setMessage(response.message)
        setLink(response.link)
      }
    } catch (error) {
      setMessage("Ошибка регистрации. Попробуйте снова.")
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="registration">
      <h1>Регистрация</h1>
      {link 
      ? (
        <div className="registration__success">
          <h2>Перейдите в телеграм и отправьте боту ваш токен верификации:</h2>
          <Button onClick={() => window.open("https://" + link, '_blank', 'noopener,noreferrer')}>Перейти в бота</Button>
        </div>
      ) 
      : <>
          <div className="auth__form">
            <Field value={nickname} setValue={setNickname} heading="Никнейм" placeholder="Никнейм" />
            <Field value={email} setValue={setEmail} heading="e-Mail" placeholder="e-Mail" />
            <Field value={telegram} setValue={setTelegram} heading="Телеграмм" placeholder="@username" />
            <div className="empty-div"></div>
            <FieldPassword value={password} setValue={setPassword} heading="Введите пароль" placeholder="Пароль" />
            <FieldPassword value={repeatPassword} setValue={setRepeatPassword} heading="Повторите пароль" placeholder="Пароль" />
            <div className="auth__form-checkbox">
              <Checkbox checked={checked} setChecked={setChecked}/>
                <NavLink onClick={() => setChecked(!checked)} className={"auth__form-rules"} to="">
                  Я согласен с условиями использования
                </NavLink>
            </div>
          </div>
          {message && <div className="auth__message">
            <p className={"auth__message-text" + (isError ? " auth__message-text--error" : "")}>{message}</p>
          </div>}
          <div className="auth__control">
            <Button onClick={clickSubmit}>
              {isLoading ? <Loading color="#fff" size={10} /> : "Регистрация"}
            </Button>
            <NavLink className={"auth__control-link"} to="/login">
              или войти
            </NavLink>
          </div>
        </>
      }
    </div>
  )
}

export default Registration
