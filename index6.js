function getAngkaTerbesarKedua(personName){
    if(Array.isArray(personName)){
        for(let i = 0 ; i<personName.length; i++){
            for(let j = i ; j<personName.length; j++ ){
                if(personName[i] < personName[j]){
                    [personName[i],personName[j]] = [personName[j],personName[i]]
                }
            }
        }
    }else{
        return 'Error : input harus berupa array'
    }

    return personName[1];
}

//const dataAngka = [9,4,7,7,4,3,2,2,8];
//const dataAngka =8;

console.log(getAngkaTerbesarKedua());
