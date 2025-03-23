import { useState } from "react"
import FieldCircle from "../../../../ui/fields/FieldCircle"
import "./location-block.scss"

function LocationBlock() {

  const [country, setCountry] = useState<string>("")
  const [city, setCity] = useState<string>("")

  return <div className="location">
    <div className="location__fields">
      <FieldCircle placeholder="Страна" value={country} onChange={(e) => setCountry(e.target.value)} />
      <FieldCircle placeholder="Город" value={city} onChange={(e) => setCity(e.target.value)} />
    </div>
  </div>
}

export default LocationBlock