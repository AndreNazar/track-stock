import Select from "../../../../../ui/selects/Select"
import "./dropdown.scss"
import { useDispatch } from "react-redux";
import { newContextBlock } from "../../../../../../redux/slices/dialogSlice";
import { useRef } from "react";
import { ContextMenuType } from "../../../../../../types/types";

function Dropdown({ loading, data, title, type, value }: { loading?: boolean, data: string[], title: string, type: ContextMenuType, value: string }) {

  const dispatch = useDispatch()
  const dropdownRef = useRef<HTMLDivElement>(null)

  function openConditionsHandler() {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect()
      dispatch(
        newContextBlock({
          list: data,
          title: "",
          top: dropdownRef.current.offsetTop + 32,
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
      </div>
      <Select loading={loading} ref={dropdownRef} onClick={openConditionsHandler} value={value} />
    </div>
  )
}

export default Dropdown
