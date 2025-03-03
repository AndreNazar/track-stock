import { NavLink } from "react-router-dom";
import Button from "../../ui/buttons/Button";
import Field from "../../ui/fields/Field";
import "./login.scss"
import FieldPassword from "../../ui/fields/FieldPassword";
import { useState } from "react";

function Login() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <div className="login">
            <h1>Вход</h1>
            <div className="auth__form">
                <Field value={email} setValue={setEmail} heading="e-Mail или Номер телефона" placeholder="Телефон"/>
                <FieldPassword value={password} setValue={setPassword} heading="Введите пароль" placeholder="Пароль"/>
            </div>
            <div className="auth__control">
                <Button>Вход</Button> 
                <NavLink className={"auth__control-link"} to="/register">или регистрация</NavLink>
                <NavLink className={"auth__control-recovery"} to="/recovery">Забыли пароль?</NavLink>
            </div>
        </div>
    );
}

export default Login;