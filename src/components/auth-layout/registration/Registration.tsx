import { NavLink } from "react-router-dom";
import Button from "../../ui/buttons/Button";
import Field from "../../ui/fields/Field";
import Checkbox from "../../ui/checkbox/Checkbox";
import "./registration.scss"
import FieldPassword from "../../ui/fields/FieldPassword";
import { useState } from "react";

function Registration() {

    
  const [checked, setChecked] = useState(false)
  const [nickname, setNickname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [code, setCode] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [repeatPassword, setRepeatPassword] = useState<string>("")

    return (
        <div className="registration">
            <h1>Регистрация</h1>
            <div className="auth__form">
                <Field value={nickname} setValue={setNickname} heading="Никнейм" placeholder="Никнейм"/>
                <Field value={email} setValue={setEmail} heading="e-Mail" placeholder="e-Mail"/>
                <Field value={phone} setValue={setPhone} heading="Номер телефона" placeholder="Номер"/>
                <Field value={code} setValue={setCode} heading="Код подтверждения" placeholder="Код"/>
                <FieldPassword value={password} setValue={setPassword} heading="Введите пароль" placeholder="Пароль"/>
                <FieldPassword value={repeatPassword} setValue={setRepeatPassword} heading="Повторите пароль" placeholder="Пароль"/>
                <div className="auth__form-checkbox">
                    <Checkbox checked={checked} setChecked={setChecked}/>
                    <NavLink onClick={() => setChecked(!checked)} className={"auth__form-rules"} to="">Я согласен с условиями использования</NavLink>
                </div>
            </div>
            <div className="registration__price">
                <p className="registration__price-value">300 ₽</p>
                <p className="registration__price-text">Месячная стоимость подписки</p>
            </div>
            <div className="auth__control">
                <Button>Попробовать 14 дней бесплатно</Button> 
                <NavLink className={"auth__control-link"} to="/login">или войти</NavLink>
            </div>
        </div>
    );
}

export default Registration;