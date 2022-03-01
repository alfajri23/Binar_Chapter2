function isValidPasswords(givenPassword){
    let falses = 'false';

    if(!(/[a-z]/.test(givenPassword))){
        if(givenPassword.length < 8){
            return `false (Karena ${givenPassword} hanya ${givenPassword.length} huruf)`
        }else{
            return `false (Karena ${givenPassword} tidak ada huruf kecil)`
        }
    }else if(!(/[A-Z]/.test(givenPassword))){
        if(givenPassword.length < 8){
            return `false (Karena ${givenPassword} hanya ${givenPassword.length} huruf)`
        }else{
            return `false (Karena ${givenPassword} tidak ada huruf besar)`
        }
    }else if(givenPassword.length < 8){
        return `false (Karena ${givenPassword} hanya ${givenPassword.length} huruf)`
    }else{

    }
}

function isValidPassword(givenPassword){

    if(!(/[a-z]/.test(givenPassword))){
        return false
    }else if(!(/[A-Z]/.test(givenPassword))){
        return false
    }else if(givenPassword.length < 8){
        return false
    }else if(isNaN(givenPassword)){
        return false
    }else if(!givenPassword){
        return false
    }
}

console.log(isValidPassword());