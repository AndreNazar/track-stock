import "./down-block.scss"
import add_track_img from "../../../../../assets/imgs/control/add_track.svg"

function AddTrackNumberButton() {
  return (
    <button className="add-track-number-button">
        <img src={add_track_img} alt="" />
        <p>Добавить еще один трек-номер</p>
    </button>
  )
}

export default AddTrackNumberButton
