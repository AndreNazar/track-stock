import Field from "../../../../ui/fields/Field"
import ButtonDash from "../../../../ui/buttons/ButtonDash"
import "./form-user-info.scss"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setAccount } from "../../../../../redux/slices/accountSlice"
import Api from "../../../../../api/api"


function FormUserInfo () {

  const dispatch = useDispatch()
  const api = new Api()
  const accountInfo = useSelector((state: any) => state.account.accountInfo)
  const [name, setName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [nickName, setNickName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [vkLink, setVkLink] = useState<string>("")

    async function saveInfoAccount () {
        await api.updateUserInfo({
            first_name: name,
            email,
            vk_account: vkLink,
            user_name: nickName,
            last_name: lastName,
        })
        
        dispatch(setAccount({
            name,
            lastname: lastName,
            nickname: nickName,
            email,
            vk_link: vkLink,
            showTG: false,
            showVK: true,
        }))
    }

    useEffect(() => {
        setName(accountInfo.name)
        setLastName(accountInfo.lastname)
        setNickName(accountInfo.nickname)
        setEmail(accountInfo.email)
        setVkLink(accountInfo.vk_link)
    }, [accountInfo])

    return (
        <div className="form-user-info">
            <div className="form-user-info__inputs">
                <Field heading="Имя" placeholder="Имя" setValue={setName} value={name}/>
                <Field heading="Фамилия" placeholder="Фамилия" setValue={setLastName} value={lastName}/>
                <Field heading="Никнейм" placeholder="Никнейм" setValue={setNickName} value={nickName}/>
                <Field heading="e-Mail" placeholder="example@inbox.com" setValue={setEmail} value={email}/>
                <Field heading="Вконтакте" placeholder="https://vk.com/example" setValue={setVkLink} value={vkLink}/>
                <div className="form-user-info__button">
                    <ButtonDash onClick={saveInfoAccount} color="#6FCF97">Сохранить данные</ButtonDash>
                </div>
            </div>
        </div>
    )
}

export default FormUserInfo