import Swal from "sweetalert2"


export const validateData = (values) => {

    if (values.name.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid name'
        })
        return false
    }

    if (values.surname.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid surname'
        })
        return false
    }

    if (values.email.length < 7) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid email'
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