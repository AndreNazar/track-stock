import Select from "../../../../../ui/selects/Select"
import info_svg from "../../../../../../assets/imgs/actions/information.svg"
import "./dropdown.scss"
import { useDispatch } from "react-redux";
import { newContextBlock } from "../../../../../../redux/slices/dialogSlice";
import { useRef } from "react";
import { ContextMenuType } from "../../../../../../types/types";

function Dropdown({ data, title, type, value }: { data: string[], title: string, type: ContextMenuType, value: string }) {

  const dispatch = useDispatch()
  const dropdownRef = useRef<HTMLDivElement>(null)

  function openConditionsHandler() {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect()
      dispatch(
        newContextBlock({
          list: data,
          title: "",
          top: rect.top,
          left: rect.left,
          width: rect.width,
          firstClick: true,
          type,
        })
      )
    }
  }

  return (
    <div className="dropdown">
      <div className="dropdown__heading">
        <p className="dropdown__heading-text">{title}</p>
        <img className="dropdown__heading-information" src={info_svg} alt="i" />
      </div>
      <Select ref={dropdownRef} onClick={openConditionsHandler} value={value} />
    </div>
  )
}

export default Dropdown
