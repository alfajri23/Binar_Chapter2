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
    else if(email.indexOf('hello') > -1){
        return "ERROR : Tidak terdeteksi '@'"
    }
    else if(!re.test(email)){
        return "INVALID"
    }
}

// console.log(checkEmail('feri@gmail.com'));
// console.log(checkEmail('ferigmail.com'));
// console.log(checkEmail());
console.log(checkTypeNumber(checkEmail(3322)));
