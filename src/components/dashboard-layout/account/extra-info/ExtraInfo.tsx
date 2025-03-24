import "./extra-info.scss"
import PrivacyBlock from "./privacy-block/PrivacyBlock"

function ExtraInfo() {

  // const [serviceDataVK, setServiceDataVK] = useState<IServiceBlock>({
  //   img: vk_img,
  //   title: "ВКонтакте",
  //   text: "Для отображения информации подключитесь к сервису.",
  //   isSelect: false,
  //   onClick: handleClickVK
  // })

  /*const [serviceDataAvito, setServiceDataAvito] = useState<IServiceBlock>({
    img: avito_img,
    title: "Avito",
    text: "Для отображения информации подключитесь к сервису.",
    isSelect: false,
    onClick: handleClickAvito
  })*/

  /*function handleClickVK() {
    setServiceDataVK(prev => {
      return {
        ...prev,
        isSelect: !prev.isSelect
      }
    })
  }*/


  /*function handleClickAvito() {
    setServiceDataAvito(prev => {
      return {
        ...prev,
        isSelect: !prev.isSelect
      }
    })
  }*/

  return <div className="extra-info">
    {/* <ServiceBlock serviceInfo={serviceDataVK} /> */}
    {/* <ServiceBlock serviceInfo={serviceDataAvito} /> */}
    <PrivacyBlock />
  </div>
}

export default ExtraInfo