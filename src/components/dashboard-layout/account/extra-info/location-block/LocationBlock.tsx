import Select from "../../../../ui/selects/Select"
import "./location-block.scss"

function LocationBlock() {
  return <div className="location">
    <div className="location__fields">
      <Select data={["Россия", "Украина", "Беларусь"]} />
      <Select data={["Москва", "Санкт-Петербург", "Беларусь"]} />
    </div>
  </div>
}

export default LocationBlock