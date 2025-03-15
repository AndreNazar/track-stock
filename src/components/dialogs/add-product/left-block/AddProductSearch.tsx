import { useState } from "react"
import "./left-block.scss"
import Field from "../../../ui/fields/Field"

function AddProductSearch() {

  const [article, setArticle] = useState<string>("")

  return (
    <div className="dialog__search">
        <div className="right__content-article">
          <Field heading="Артикул" placeholder="Артикул" value={article} setValue={setArticle} />
        </div>
    </div>
  )
}


export default AddProductSearch