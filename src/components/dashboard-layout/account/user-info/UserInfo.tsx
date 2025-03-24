import { useState } from "react"
import AccountHeader from "./account-header/AccountHeader"
import avatar_logo from "../../../../assets/imgs/logo/logo.svg"
import "./user-info.scss"
import FormUserInfo from "./form-user-info/FormUserInfo"
import FormChangePassword from "./form-change-password/FormChangePassword"
import { useSelector } from "react-redux"

function UserInfo() {

  const [isOpenEditBlock, setOpenEditBlock] = useState<boolean>(false)
  const accountInfo = useSelector((state: any) => state.account.accountInfo)

  return (
    <div className="user-info">
      <div className={"user-info__edit" + (isOpenEditBlock ? " user-info__edit--open" : "")}>
        <AccountHeader 
          avatar={avatar_logo}
          nickname={accountInfo.nickname}
          mail={accountInfo.email}
          isOpenEditBlock={isOpenEditBlock} 
          setOpenEditBlock={setOpenEditBlock}
        />
        {/* <CardLinked cardData={{
          number: "•••• •••• •••• 1234",
          date: "11/26"
        }} /> */}
        <FormUserInfo />
        <FormChangePassword/>
      </div>
      {/* <div className="user-info__subscribe">
        <Subscribe/>
      </div> */}
    </div>
  )
}

export default UserInfo
