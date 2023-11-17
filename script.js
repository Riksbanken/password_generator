const pw1Dsp = document.getElementById("password1");
const pw2Dsp = document.getElementById("password2");
function passwordsGenerator() {
  const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
  ];
  const pwIndex1 = [];
  const pwIndex2 = [];
  const lengthPass = Number(document.getElementById("pass-length").value);
  const noSymbol = document.getElementById("symbol-option").checked;
  const noNumber = document.getElementById("symbol-option").checked;
  let chAdjust;

  if (noSymbol && noNumber) {
    chAdjust = characters.slice(0, 52);
  } else if (noNumber) {
    chAdjust = characters.slice(51, 62);
  } else if (noSymbol) {
    chAdjust = characters.slice(62, characters.length);
  } else {
    chAdjust = characters;
  }

  for (let character = 0; character < lengthPass; character++) {
    pwIndex1.push(Math.floor(Math.random() * chAdjust.length));
    pwIndex2.push(Math.floor(Math.random() * chAdjust.length));
  }
  const pw1 = pwIndex1.map((index) => {
    return chAdjust[index];
  });
  const pw2 = pwIndex2.map((index) => {
    return chAdjust[index];
  });
  pw1Dsp.textContent = pw1.join("");
  pw2Dsp.textContent = pw2.join("");
}
