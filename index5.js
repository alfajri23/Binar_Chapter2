function getSplitName(personName){
    if(typeof personName != 'string'){
        let datas = {
            Error : 'Error : invlid typedata'
        }
        return datas;
    }
    let result = personName.split(" ");
    let data = {
        firstName :'',
        middleName : 'null',
        lastName : 'null'
    }
    
    if(result.length > 3){
        return 'Error : This function is only for 3 character name';
    }else if(!isNaN(personName)){
        return 'Error : tidak boleh berisi angka';
    }else{
        if(result.length == 1){
            data.firstName = result[0]
        }else if(result.length == 2){
            data.firstName = result[0]
            data.lastName = result[1]
        }else{
            data.firstName = result[0]
            data.middleName = result[1]
            data.lastName = result[2]
        }
        
        return data;
    }


}

console.log(getSplitName('feri alfajri bagus'))
console.log(getSplitName('feri alfajri'))
console.log(getSplitName('feri'))
console.log(getSplitName('feri alfajri bagus sekali'))
console.log(getSplitName(0))