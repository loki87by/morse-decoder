const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = [];
  for (let i = 0; i < expr.length / 10; i++) {
    const symb = expr.slice(i * 10, i * 10 + 10);
    arr.push(symb);
  }
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === '**********') {
        res += ' '
    } else {
    const num = arr[i].replace(/^0*/, "");
    const numWithPuncts = num.replace(/10/g, ".");
    const mor = numWithPuncts.replace(/11/g, "-");
    res += MORSE_TABLE[mor]
    }
  }
  return res;
}

module.exports = {
  decode,
};
