import { useState } from "react"
import Field from "../../../../ui/fields/Field"

function DownInfo (){

    const [date, setDate] = useState("")

    return <div className="down__info">
    <div className="down__info-date"><Field heading="Дата покупки" placeholder="XX/XX/XXXX" value={date} setValue={setDate}/></div>
    <div className="down__info-brand"><Field heading="Источник" placeholder="Источник" value={date} setValue={setDate}/></div>
    <div className="down__info-comment"><Field heading="Комментарий" placeholder="Ваш текст" value={date} setValue={setDate}/></div>
  </div>
}

export default DownInfo