function changeWord(selectedText,changedText,text){
    return text.replace(selectedText,changedText,text);
}

let text = "hallo world";
const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak mampu menggambarkan besarnya cintaku padamu'

console.log(changeWord('mencintai','membenci',kalimat1));
console.log(changeWord('bromo','semeru',kalimat2));