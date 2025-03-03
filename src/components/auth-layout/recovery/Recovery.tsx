import { NavLink } from "react-router-dom";
import Button from "../../ui/buttons/Button";
import Field from "../../ui/fields/Field";
import "./recovery.scss"
import FieldPassword from "../../ui/fields/FieldPassword";
import { useState } from "react";

function Recovery () {

    const [phone, setPhone] = useState<string>("")
    const [code, setCode] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [repeatPassword, setRepeatPassword] = useState<string>("")

    return <div className="recovery">
        <h1>Восстановление пароля</h1>
        <div className="auth__form">
            <Field value={phone} setValue={setPhone} heading="Номер телефона" placeholder="Телефон"/>
            <Field value={code} setValue={setCode} heading="Код подтверждения" placeholder="Код"/>
            <FieldPassword value={password} setValue={setPassword} heading="Введите пароль" placeholder="Пароль"/>
            <FieldPassword value={repeatPassword} setValue={setRepeatPassword} heading="Повторите пароль" placeholder="Пароль"/>
        </div>
        <div className="auth__control">
            <Button>Восстановить</Button>
            <NavLink className={"auth__control-link"} to="/login">или войти</NavLink>
        </div>
        
    </div>
}

export default Recovery;