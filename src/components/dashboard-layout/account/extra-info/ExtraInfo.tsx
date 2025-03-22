import { useState } from "react"
import "./extra-info.scss"
import ServiceBlock from "./service-block/ServiceBlock"
import { IServiceBlock } from "../../../../types/types"
import vk_img from "../../../../assets/imgs/platforms/vk.png"
import PrivacyBlock from "./privacy-block/PrivacyBlock"
import LocationBlock from "./location-block/LocationBlock"

function ExtraInfo() {

  const [serviceDataVK, setServiceDataVK] = useState<IServiceBlock>({
    img: vk_img,
    title: "ВКонтакте",
    text: "Для отображения информации подключитесь к сервису.",
    isSelect: false,
    onClick: handleClickVK
  })

  /*const [serviceDataAvito, setServiceDataAvito] = useState<IServiceBlock>({
    img: avito_img,
    title: "Avito",
    text: "Для отображения информации подключитесь к сервису.",
    isSelect: false,
    onClick: handleClickAvito
  })*/

  function handleClickVK() {
    setServiceDataVK(prev => {
      return {
        ...prev,
        isSelect: !prev.isSelect
      }
    })
  }


  /*function handleClickAvito() {
    setServiceDataAvito(prev => {
      return {
        ...prev,
        isSelect: !prev.isSelect
      }
    })
  }*/

  return <div className="extra-info">
    <ServiceBlock serviceInfo={serviceDataVK} />
    {/* <ServiceBlock serviceInfo={serviceDataAvito} /> */}
    <PrivacyBlock />
    <LocationBlock />
  </div>
}

export default ExtraInfo