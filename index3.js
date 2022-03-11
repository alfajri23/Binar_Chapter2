import checkTypeNumber from "./index2.js";

function checkEmail(email){
    var re = /\S+@\S+\.\S+/;

    if(re.test(email)){
        return "VALID"
    }else if(!email){
        return "ERROR : Email harus diisi ya"
    }else if(!isNaN(email)){
        return "INVALID"
    }
    else if(email.indexOf('@') < 0){
        return "ERROR : Tidak terdeteksi '@'"
    }
    else if(!re.test(email)){
        return "INVALID"
    }
}

console.log(checkEmail('feri@gmail.com'));
console.log(checkEmail('feri@gmail.co.id'));
console.log(checkEmail('ferigmail@gamil'));
console.log(checkEmail('feri'));
console.log(checkTypeNumber(checkEmail(3322)));
console.log(checkEmail());
