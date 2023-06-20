const validation = (userData) => { // Va con minuscula porque es una funcion, no un componente
    const errors = {};

    // errores en cuanto al email
    if(!userData.email){
        errors.email = 'Debe ingresar el email.'
    }
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'El email ingresado no es válido.'
    }
    if(userData.email.length > 35) {
        errors.email = 'El email no puede superar los 35 caracteres.'
    }

    // errores en cuanto a la password
    if(!/.*\d+/.test(userData.password)){
        errors.password = 'La contraseña debe poseer al menos un número.'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'La contraseña debe poseer entre 6 o 10 caracteres'
    }


    return errors;
}

export default validation;