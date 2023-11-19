import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const show_alert =(mensaje,icono,foco="") => {
    onFocus(foco)
    const mySwal = withReactContent(Swal)
    mySwal.fire({
        'title':mensaje,
        'icon':icono
    })

}

const onFocus= (foco) =>{
    if(foco!==""){
        document.getElementById(foco).focus()
    }
}