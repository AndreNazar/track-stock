import { useEffect, useState } from "react"
import { switchTab } from "../../../redux/slices/menuSlice"
import "./account.scss"
import ExtraInfo from "./extra-info/ExtraInfo"
import UserInfo from "./user-info/UserInfo"
import { useDispatch } from "react-redux"
import Api from "../../../api/api"
import { setAccount } from "../../../redux/slices/accountSlice"
import { selectCurrentContext } from "../../../redux/slices/selectionsSlice"

function Account() {
  const dispatch = useDispatch()
  const api = new Api()

  useEffect(() => {
    dispatch(switchTab("/account"))
    
      api.getUserInfo().then((res) => {
          dispatch(setAccount({
            name: res.first_name,
            lastname: res.last_name,
            nickname: res.user_name,
            showVK: res.show_vk,
            showTG: res.show_telegram,
            email: res.email,
            vk_link: res.vk_account
          }))
          dispatch(selectCurrentContext({type: "vk", idx: +res.show_vk}))
          dispatch(selectCurrentContext({type: "tg", idx: +res.show_telegram}))
      })
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
