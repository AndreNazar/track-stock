import { useEffect, useMemo, useState } from "react"
import success_img from "../../../assets/imgs/statuses/success.svg"
import error_img from "../../../assets/imgs/statuses/error.svg"
import warning_img from "../../../assets/imgs/statuses/warning.svg"
import { IStatus } from "../../../types/types"
import { useDispatch } from "react-redux"
import { hidePopapStatus } from "../../../redux/slices/dialogSlice"

function PopapStatus({text, status}: {text: string, status: IStatus}) {

    const dispatch = useDispatch()
    const [isShow, setIsShow] = useState(false)

    const getIcon = useMemo(() => {
        switch (status) {
            case "success":
                return success_img
            case "error":
                return error_img
            case "warning":
                return warning_img
            case "info":
                return success_img
            default:
                return success_img
        }
    }, [status])

    useEffect(() => {
        setIsShow(true)
        setTimeout(() => {
            if(status === "success"){
                setIsShow(false)
                setTimeout(() => {
                    dispatch(hidePopapStatus())
                }, 1000)
            }
        }, 5000)
    }, [])


    return (
        <div onClick={() => dispatch(hidePopapStatus())} className={`popap-status ${isShow ? "popap-status--show" : "popap-status--hide"} popap-status-${status}`}>
            <img className="popap-status__img" src={getIcon} alt="status" />
            <p className="popap-status__text">{text}</p>
        </div>
    )
}

export default PopapStatus