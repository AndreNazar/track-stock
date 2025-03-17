import { useEffect } from "react"
import { switchTab } from "../../../redux/slices/menuSlice"
import "./account.scss"
import ExtraInfo from "./extra-info/ExtraInfo"
import UserInfo from "./user-info/UserInfo"
import { useDispatch } from "react-redux"

function Account() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(switchTab("/account"))
  }, [])

  return (
    <div className="account">
      <div className="account__wrapper">
        <UserInfo />
        <ExtraInfo />
      </div>
    </div>
  )
}

export default Account
