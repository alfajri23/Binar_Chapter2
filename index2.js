const checkTypeNumber = (givenNumber) => {
    if(givenNumber == null){
        return "Error: Bro where is the parameter ?"
    }else if(typeof(givenNumber) != givenNumber){
        return "Error: Invalid data type";
    }else{
        return givenNumber%2 == 0 ? 'GENAP' : 'GANJIL';
    }
}

export default checkTypeNumber;

//console.log(checkTypeNumber({}));