import { useState } from "react"
import Field from "../../../../ui/fields/Field"
import AddTrackNumberButton from "./AddTrackNumberButton"
import big_cross_img from "../../../../../assets/imgs/control/big-cross.svg"

function DownTrackList (){

    const [tracks, setTracks] = useState([
        {id: 1, track_number: "",  service: ""},
        {id: 12, track_number: "",  service: ""},
    ])

    function changeTrackNumber(id: number, e: string) {
        setTracks(tracks.map(t => t.id === id ? {...t, track_number: e} : t))
    }

    function changeService(id: number, e: string) {
        setTracks(tracks.map(t => t.id === id ? {...t, service: e} : t))
    }
    return <div className="down__tracks-list">
    {tracks.map((t) => <div key={t.id} className="down__tracks-item">
        <Field heading="Трек-номер" placeholder="Номер" value={t.track_number} setValue={(e) => changeTrackNumber(t.id, e)}/>
        <Field heading="Служба доставки" placeholder="Выбор" value={t.service} setValue={(e) => changeService(t.id, e)}/>
        <img src={big_cross_img} alt="" />
    </div>)}
    <AddTrackNumberButton />
  </div>
}

export default DownTrackList