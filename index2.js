const checkTypeNumber = (givenNumber) => {
    if(givenNumber == null){
        return "Error: Bro where is the parameter ?"
    }else if(typeof givenNumber != 'number'){
        return "Error: Invalid data type";
    }else{
        return givenNumber%2 == 0 ? 'GENAP' : 'GANJIL';
    }
}

export default checkTypeNumber;

// console.log(checkTypeNumber(10));
// console.log(checkTypeNumber(3));
// console.log(checkTypeNumber("3"));
// console.log(checkTypeNumber({}));
// console.log(checkTypeNumber([]));
// console.log(checkTypeNumber());