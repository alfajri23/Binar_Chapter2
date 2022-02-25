function changeWord(selectedText,changedText,text){
    return text.replace(selectedText,changedText,text);
}

let text = "hallo world";

console.log(changeWord('hallo','hello',text));