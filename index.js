// my first try

// let characters = [
//   // Numbers
//   '0','1','2','3','4','5','6','7','8','9',

//   // Uppercase letters
//   'A','B','C','D','E','F','G','H','I','J','K','L','M',
//   'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',

//   // Lowercase letters
//   'a','b','c','d','e','f','g','h','i','j','k','l','m',
//   'n','o','p','q','r','s','t','u','v','w','x','y','z',

//   // Special characters (most accepted)
//   '!','@','#','$','%','^','&','*',
//   '(',')','-','_','=','+',
//   '[',']','{','}',
//   ';',':',
//   "'",'"',
//   ',', '.',
//   '<','>',
//   '/', '?',
//   '\\','|',
//   '`','~'
// ];

// function generatePasswords() {
//     let passwordLength = document.getElementById("passwordLength");
//     let getPasswordLength = Number(passwordLength.value);
//     if (getPasswordLength) {
//         if (excludeNumbers.checked) {
//             let charactersMinusNumbers = characters.slice(10);
//             let numberOfCharacters  = charactersMinusNumbers.length;
//             // Password1
//             for (let i = 1; i <= getPasswordLength; i++) {
//                     add = Math.floor(Math.random()*numberOfCharacters);
//                     output1.textContent += charactersMinusNumbers[add];
//             }
//             // Password2
//             for (let y = 1; y <= getPasswordLength; y++) {
//                     add = Math.floor(Math.random()*numberOfCharacters);
//                     output2.textContent += charactersMinusNumbers[add];
//             }
//         } else if (excludeUpperCase.checked) {
//             let slice1 = characters.slice(0,10);
//             let slice2 = characters.slice(36)
//             let charactersMinusUpperCase = slice1 + slice2;
//             let numberOfCharacters  = charactersMinusUpperCase.length;
//             // Password1
//             for (let i = 1; i <= getPasswordLength; i++) {
//                     add = Math.floor(Math.random()*numberOfCharacters);
//                     output1.textContent += charactersMinusNumbers[add];
//             }
//             // Password2
//             for (let y = 1; y <= getPasswordLength; y++) {
//                     add = Math.floor(Math.random()*numberOfCharacters);
//                     output2.textContent += charactersMinusNumbers[add];
//             }
//         } else if (excludeSymbols.checked) {
//             let charactersMinusSymbols = characters.slice(0,62);
//             let numberOfCharacters  = charactersMinusSymbols.length;
//             // Password1
//             for (let i = 1; i <= getPasswordLength; i++) {
//                     add = Math.floor(Math.random()*numberOfCharacters);
//                     output1.textContent += charactersMinusNumbers[add];
//             }
//             // Password2
//             for (let y = 1; y <= getPasswordLength; y++) {
//                     add = Math.floor(Math.random()*numberOfCharacters);
//                     output2.textContent += charactersMinusNumbers[add];
//             }
//         } else {
//             // Password1
//             for (let i = 1; i <= getPasswordLength; i++) {
//                     add = Math.floor(Math.random()*characters.length);
//                     output1.textContent += charactersMinusNumbers[add];
//             }
//             // Password2
//             for (let y = 1; y <= getPasswordLength; y++) {
//                     add = Math.floor(Math.random()*characters.length);
//                     output2.textContent += charactersMinusNumbers[add];
//             }
//         }
//     } else {
//         alert("Please enter a minimum password length")
//     }
// }

let resetButton = document.getElementById("resetButton")
let generateBtn = document.getElementById("generateButton");
let passwordLength = document.getElementById("passwordLength");
let excludeNumbers = document.getElementById("excludeNumbers");
let excludeUpperCase = document.getElementById("excludeUpperCase");
let excludeSymbols = document.getElementById("excludeSymbols");
let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let copyImg1 = document.getElementById("copyImg1")
let copyImg2 = document.getElementById("copyImg2")

output1.textContent = "";
output2.textContent = "";


const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const symbols = [
  '!','@','#','$','%','^','&','*',
  '(',')','-','_','=','+',
  '[',']','{','}',
  ';',':',"'",'"',
  ',', '.','<','>',
  '/', '?','\\','|','`','~'
];

function buildCharacterPool() {
    let pool = [
        ...numbers,
        ...upperCase,
        ...lowerCase,
        ...symbols
    ];

    if (excludeNumbers.checked) {
        pool = pool.filter(c => !numbers.includes(c));
    }

    if (excludeUpperCase.checked) {
        pool = pool.filter(c => !upperCase.includes(c));
    }

    if (excludeSymbols.checked) {
        pool = pool.filter(c => !symbols.includes(c));
    }

    return pool;
}

function generatePassword(length, pool) {
    let result = "";
    for (let i = 0; i < length; i++) {
        let rand = Math.floor(Math.random() * pool.length);
        result += pool[rand];
    }
    return result;
}

function generatePasswords() {
    output1.textContent = "";
    output2.textContent = "";

    let length = Number(passwordLength.value);
    if (!length || length <= 0) {
        alert("Please enter a valid password length");
        return;
    }

    const pool = buildCharacterPool();

    if (pool.length === 0) {
        alert("You excluded all character types!");
        return;
    }

    output1.textContent = generatePassword(length, pool);
    output2.textContent = generatePassword(length, pool);
}

// function generatePasswords() {
//     output1.textContent = "";
//     output2.textContent = "";

//     let length = Number(passwordLength.value);
//     if (!length || length <= 0) {
//         alert("Please enter a valid password length");
//         return;
//     }

//     let pool = buildCharacterPool();

//     if (pool.length === 0) {
//         alert("You excluded all character types!");
//         return;
//     }

//     output1.textContent = generatePassword(length, pool);
//     output2.textContent = generatePassword(length, pool);
// }


function resetGenerator() {
    output1.textContent = "";
    output2.textContent = "";
    passwordLength.value = "";
    excludeNumbers.checked = false;
    excludeUpperCase.checked = false;
    excludeSymbols.checked = false;
    
}

copyImg1.addEventListener('click', () => {
    text = output1.textContent;
    navigator.clipboard.writeText(text)
        .then(() => {
            copyImg1.src = "icons8_checked_checkbox_1.svg"
            setTimeout(() => {
                copyImg1.src = "icons8_documents_1.svg"
            }, 1500);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
});

copyImg2.addEventListener('click', () => {
    text = output2.textContent;
    navigator.clipboard.writeText(text)
        .then(() => {
            copyImg2.src = "icons8_checked_checkbox_1.svg"
            setTimeout(() => {
                copyImg2.src = "icons8_documents_1.svg"
            }, 1500);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
});
