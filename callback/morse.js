const textRef={
  "A":".-",
  "B":"-...",
  "C":"-.-.",
  "D":"-..",
  "E":".",
  "F":"..-.",
  "G":"--.",
  "H":"....",
  "I":"..",
  "J":".---",
  "K":"-.-",
  "L":".-..",
  "M":"--",
  "N":"-.",
  "O":"---",
  "P":".--.",
  "Q":"--.-",
  "R":".-.",
  "S":"...",
  "T":"-",
  "U":"..-",
  "V":"...-",
  "W":".--",
  "X":"-..-",
  "Y":"-.--",
  "Z":"--..",
  "0":"-----",
  "1":".----",
  "2":"..---",
  "3":"...--",
  "4":"....-",
  "5":".....",
  "6":"-....",
  "7":"--...",
  "8":"---..",
  "9":"----.",
  " ":" "
}

const morseRef = {
  ".-":"A",
  "-...":"B",
  "-.-.":"C",
  "-..":"D",
  ".":"E",
  "..-.":"F",
  "--.":"G",
  "....":"H",
  "..":"I",
  ".---":"J",
  "-.-":"K",
  ".-..":"L",
  "--":"M",
  "-.":"N",
  "---":"O",
  ".--.":"P",
  "--.-":"Q",
  ".-.":"R",
  "...":"S",
  "-":"T",
  "..-":"U",
  "...-":"V",
  ".--":"W",
  "-..-":"X",
  "-.--":"Y",
  "--..":"Z",
  "-----":"0",
  ".----":"1",
  "..---":"2",
  "...--":"3",
  "....-":"4",
  ".....":"5",
  "-....":"6",
  "--...":"7",
  "---..":"8",
  "----.":"9",
  "space":" "
}

const morseCodeList=[];

// suppression des espaces
function removeExtraSpace(str){
    str = str.replace(/[\s]{3,}/g," space "); // change les 3 espaces en un mot "space"
    return str;
}


function decodeMorse(morse){
  morseToTranslate = removeExtraSpace(morse);
  const listCodes = morseToTranslate.split(" ");

  const letters = listCodes.map(value => {
    return morseRef[value];
  })

  return letters.join("");

}

function encodeMorse(text){
  textToEncode = text.toUpperCase();
  tabToEncode = textToEncode.split("");

    tabEncoded = tabToEncode.map(value =>{
      return textRef[value];
    })

    return tabEncoded.join(" ");
}

console.log("En texte ca donne : " + decodeMorse(".-.. . ...   . -. ..-. .- -. - ...   -.. --- .-. -- . -. -"));

console.log("En morse ca donne : " + encodeMorse("les enfants dorment"));
