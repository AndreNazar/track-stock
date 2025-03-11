import "./account.scss"
import ExtraInfo from "./extra-info/ExtraInfo"
import UserInfo from "./user-info/UserInfo"

function Account(){
    return <div className="account">
        <div className="account__wrapper">
            <UserInfo />
            <ExtraInfo />
        </div>
    </div>
}

export default Account