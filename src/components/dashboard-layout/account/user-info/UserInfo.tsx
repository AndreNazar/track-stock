import { useState } from "react"
import AccountHeader from "./account-header/AccountHeader"
import CardLinked from "./subscribe-block/content/CardLinked"
import Subscribe from "./subscribe-block/Subscribe"
import "./user-info.scss"
import FormUserInfo from "./form-user-info/FormUserInfo"
import FormChangePassword from "./form-change-password/FormChangePassword"

function UserInfo() {

  const [isOpenEditBlock, setOpenEditBlock] = useState<boolean>(false)

  return (
    <div className="user-info">
      <div className={"user-info__edit" + (isOpenEditBlock ? " user-info__edit--open" : "")}>
        <AccountHeader 
          avatar="https://avatars.githubusercontent.com/u/101021255?v=4"
          nickname="Kostya"
          mail="kostya@gmail.com"
          isOpenEditBlock={isOpenEditBlock} 
          setOpenEditBlock={setOpenEditBlock}
        />
        <CardLinked cardData={{
          number: "•••• •••• •••• 1234",
          date: "11/26"
        }} />
        <FormUserInfo />
        <FormChangePassword/>
      </div>
      <div className="user-info__subscribe">
        <Subscribe/>
      </div>
    </div>
  )
}

export default UserInfo
