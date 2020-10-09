const MORSE_TABLE = {
    '.-':     'a', //'0000001011': 'a';
    '-...':   'b', 
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k', 
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    //получаем массив строк из 10 символов
    let exprArr = expr.match(/.{1,10}/g);
     
    //кодируем в морзе
    for(let i=0; i < exprArr.length; i++) {
        exprArr[i] = exprArr[i].replace(/10/g, ".").replace(/11/g, "-").replace(/0/g, "").replace(/\*{10}/g, " ");
    }

    let result = [];
    for(let i=0; i < exprArr.length; i++) {
    for(const keys in MORSE_TABLE) {
        if (exprArr[i] === keys)  result[i] = MORSE_TABLE[keys];
        if (exprArr[i] === ' ') result[i] = ' ';
    }
    }
    result = result.join('');
    return result;
}

module.exports = {
    decode
}