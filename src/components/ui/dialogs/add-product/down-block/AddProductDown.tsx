import "./down-block.scss"
import DownInfo from "./DownInfo"
import DownTrackList from "./DownTrackList"

function AddProductDown() {


  return (
    <div className="dialog__down">
      <DownTrackList />
      <DownInfo />
    </div>
  )
}

export default AddProductDown
