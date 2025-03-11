import { NavLink, useNavigate } from "react-router-dom"
import Button from "../../ui/buttons/Button"
import Field from "../../ui/fields/Field"
import "./login.scss"
import FieldPassword from "../../ui/fields/FieldPassword"
import { useEffect, useState } from "react"
import api, { ILogin } from "../../../api/api"
import Loading from "../../ui/loadings/Loading"

function Login({setIsAuth}: {setIsAuth: (arg: boolean) => void}) {
  const [login, setLogin] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  function gotoDashboard() {
    navigate("/inventory")
  }
  
  async function signIn(fields: ILogin) {
    return api.login(fields).then(async(auth) => {
        
      setIsAuth(Boolean(auth.token));
      localStorage.setItem("access-token", auth.token);

      setTimeout(() => {
        gotoDashboard()
      }, 1);
    });
  }
  
  const clickSubmit = () => {
    setIsLoading(true)
    signIn({
      telegram: login,
      password: password,
    })
      .then(() => {
        setIsAuth(true);
      })
      .catch((er) => {
        console.log(er);
        setError("Неправильный логин или пароль");
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  useEffect(() => {
    if (localStorage.getItem('access-token')) { // WARNING
      navigate("/inventory")
      setIsAuth(true)
    }
  }, [])

  return (
    <div className="login">
      <h1>Вход</h1>
      <div className="auth__form">
        <Field value={login} setValue={setLogin} heading="Введите логин" placeholder="Логин" />
        <FieldPassword value={password} setValue={setPassword} heading="Введите пароль" placeholder="Пароль" />
      </div>
      {error && <div className="auth__message">
        <p className={"auth__message-text" + (error ? " auth__message-text--error" : "")}>{error}</p>
      </div>}
      <div className="auth__control">
        <Button onClick={clickSubmit}>
            {isLoading ? <Loading color="#fff" size={10} /> : "Вход"}
        </Button>
        <NavLink className={"auth__control-link"} to="/register">
          или регистрация
        </NavLink>
        <NavLink className={"auth__control-recovery"} to="/recovery">
          Забыли пароль?
        </NavLink>
      </div>
    </div>
  )
}

export default Login
