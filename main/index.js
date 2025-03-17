function main() {

    const letters = document.getElementById("letters").value;
    const numbers = document.getElementById("numbers").value;
    const symbols = document.getElementById("symbols").value;

    let resultPassword = "";

    let lettersCounter = 0;
    let numbersCounter = 0;
    let specialSymbolCounter = 0;

    const numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    const lettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z'
    ];
    const specialCharactersArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
        '-', '_', '=', '+', '{', '}', '[', ']', '|', ':', ';', '"', '&lt;', '&gt;', '?',
        ',', '.', '/', '~', '`'];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (Number(letters) > 0) {
        while (lettersCounter <= Number(letters) - 1) {
            resultPassword += lettersArray[getRandomInt(0, (lettersArray.length - 1))];
            lettersCounter++;
        }
    }

    if (Number(numbers) > 0) {
        while (numbersCounter <= Number(numbers) - 1) {
            resultPassword += numbersArray[getRandomInt(0,(numbersArray.length - 1))];
            numbersCounter++;
        }
    }

    if (Number(symbols) > 0) {
        while (specialSymbolCounter <= Number(symbols) - 1) {
            resultPassword += specialCharactersArray[getRandomInt(0, (specialCharactersArray.length - 1))];
            specialSymbolCounter++;
        }
    }

    function check(symbol) {
        const checkArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let a = 0; a < checkArray.length; a++) {
            if (symbol === checkArray[a]) {
                return true;
            }
        }
        return false;
    }

    const resultDiv = document.getElementById("resultPasswordContainerMain");
    const lettersInput = document.getElementById("letters");
    const numbersInput = document.getElementById("numbers");
    const symbolsInput = document.getElementById("symbols");

    if (check(Number(letters)) !== true) {
        lettersInput.style.borderColor = 'red';
    } else {
        lettersInput.style.borderColor = '#42b72a';
    }

    if (check(Number(numbers)) !== true) {
        numbersInput.style.borderColor = 'red';
    } else {
        numbersInput.style.borderColor = '#42b72a';
    }

    if (check(Number(symbols)) !== true) {
        symbolsInput.style.borderColor = 'red';
    } else {
        symbolsInput.style.borderColor = '#42b72a';
    }

    resultDiv.style.display = "block";
    document.getElementById("passwordDeclaration").innerHTML = `<h1>You password</h1>`;
    document.getElementById("resultPassword").innerHTML = `${resultPassword} <button><i class="fa-solid fa-copy"></i></button>`;

    // модуль проверки

    function checkPasswordLevel1(resultPassword) {
        for (let a = 0; a < resultPassword.length; a++) {
            if (resultPassword[a] === resultPassword[a + 1] && resultPassword[a] === resultPassword[a + 2]) {
                console.log("3 повторяющихся символа подряд представляют угрозу безопасности");
            }
        }
        for (let a = 0; a < resultPassword.length; a++) {
            let checkSymbol = resultPassword[a];
            let occurrencesCounter = 0;
            for (let a = 0; a < resultPassword.length; a++) {
                if (checkSymbol === resultPassword[a]) {
                    occurrencesCounter++;
                }
                if (occurrencesCounter => 4) {
                    console.log("4 одинаковых символа в пароле представляют угрозу безопасности");
                }
            }
        }
    }
}
