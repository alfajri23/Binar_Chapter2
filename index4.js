
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

console.log(isValidPassword('Meong129'));
console.log(isValidPassword('meoag129'));
console.log(isValidPassword('@hsd'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());