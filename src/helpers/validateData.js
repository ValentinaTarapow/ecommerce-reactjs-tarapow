import Swal from "sweetalert2"
import "./helperStyling.scss"


export const validateData = (values) => {

    if (values.name.length < 2) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid name',
            text: 'You must complete the name field (at least 2 character)'
        })
        return false
    }

    if (values.surname.length < 2) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid surname',
            text: 'You must complete the surname field (at least 2 character)'
        })
        return false
    }

    if (values.email.length < 5) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid email',
            text: 'You must complete the surname field (at least 6 characters)'
        })
        return false
    }

    if (values.emailConfirm !== values.email) {
        Swal.fire({
            icon: 'error',
            title: 'Emails do not match'
        })
        return false
    }

    return true
}