import { useDispatch, useSelector } from "react-redux"
import ConfirmDialog from "../../ui/dialog/ConfirmDialog"
import { closeDialogDeleteProduct } from "../../../redux/slices/dialogSlice"
import Api from "../../../api/api"
import { useNavigate } from "react-router"
import { useState } from "react"

function DeleteProduct() {

    const dispatch = useDispatch()
    const deleteData = useSelector((state:any) => state.dialog.deleteData)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function deleteProductHandler () {
        setIsLoading(true)
        const api = new Api()
        await api.deleteSneaker(deleteData.id)
        dispatch(closeDialogDeleteProduct())
        setIsLoading(false)
        navigate(-1)
    }

  return (
    <ConfirmDialog 
    confirmText="Да" 
    cancelText="Нет" 
    closeHandler={() => dispatch(closeDialogDeleteProduct())}
    onConfirm={deleteProductHandler}
    loading={isLoading}
    onCancel={() => dispatch(closeDialogDeleteProduct())}>
        <h2>Вы уверены что хотите удалить {deleteData.name}?</h2>
    </ConfirmDialog>
  )
}

export default DeleteProduct