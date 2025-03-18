function copy() {
    navigator.clipboard.writeText(document.getElementById("resultPassword").textContent);
}

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

    function check(string) {
        string = string.split("");
        const checkArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        for (let a = 0; a < string.length; a++) {
            for (let b = 0; b < checkArray.length; b++) {
                if (string[a] === checkArray[b]) {
                    return true;
                }
            }
        }
        return false;
    }

    const resultDiv = document.getElementById("resultPasswordContainerMain");
    const lettersInput = document.getElementById("letters");
    const numbersInput = document.getElementById("numbers");
    const symbolsInput = document.getElementById("symbols");

    if (check(letters) === false) {
        lettersInput.style.borderColor = 'red';
    } else {
        lettersInput.style.borderColor = '#42b72a';
    }

    if (check(numbers) === false) {
        numbersInput.style.borderColor = 'red';
    } else {
        numbersInput.style.borderColor = '#42b72a';
    }

    if (check(symbols) === false) {
        symbolsInput.style.borderColor = 'red';
    } else {
        symbolsInput.style.borderColor = '#42b72a';
    }

    resultDiv.style.display = "block";
    document.getElementById("passwordDeclaration").innerHTML = `<h1>You password</h1>`;
    document.getElementById("resultPassword").innerHTML = `${resultPassword} <button id="copyButton" onclick="copy()"><i class="fa-solid fa-copy"></i></button>`;
}

function test() {

    // модуль проверки (функция тестов)

    // получаем пароль
    let resultPassword = document.getElementById("resultPassword").innerText;

    // тест для проверки на три повторяющихся символа в пароле подряд
    function testPasswordOne(resultPassword) {
        for (let a = 0; a < resultPassword.length; a++) {
            if (resultPassword[a] === resultPassword[a + 1] && resultPassword[a] === resultPassword[a + 2]) {
                return false;
            }
        }
        return true
    }

    if (testPasswordOne(resultPassword) === false) {
        alert("3 repeating characters in a row pose a security risk");
        document.getElementById("test1").innerHTML = `<p>Consecutive characters test</p>`
    } else if (testPasswordOne(resultPassword) === true) {
        document.getElementById("test1").innerHTML = `<p>Consecutive characters test - <i class="fa-solid fa-check"></i></p>`
    }

    // тест для проверки на 4 одинкавых символа в пароле

    function testPasswordTwo(resultPassword) {
        let occurrencesCounter = 0;
        for (let a = 0; a < resultPassword.length; a++) {
            let checkSymbol = resultPassword[a];
            for (let a = 0; a < resultPassword.length; a++) {
                if (checkSymbol === resultPassword[a]) {
                    occurrencesCounter++;
                }
            }
            if (Number(occurrencesCounter) >= 4) {
                return false;
            } else {
                return true;
            }
            occurrencesCounter = 0;
        }
    }

    if (testPasswordTwo(resultPassword) === false) {
        document.getElementById('test2').innerHTML = `<p>Many identical characters test</p>`
        alert("4 identical characters in a password pose a security risk");
    } else {
        document.getElementById('test2').innerHTML = `<p>Many identical characters test - <i class="fa-solid fa-check"></i></p>`
    }

    // тест для проверки того, состоит ли пароль только из букв латинского алфавита

    function onlyLettersPasswordCheck(resultPassword) {
        const checkLettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        for (let a = 0; a < resultPassword.length; a++) {
            if (checkLettersArray.includes(resultPassword[a]) === false) {
                return true;
            }
        }
        return false;
    }

    if (onlyLettersPasswordCheck(resultPassword) === false) {
        document.getElementById('test3').innerHTML = `<p>Only letters test</p>`
        alert('The password is not secure because it consists only of letters.');
    } else {
        document.getElementById('test3').innerHTML = `<p>Only letters test - <i class="fa-solid fa-check"></i></p>`
    }

    // тест для проверки того, состоит ли парооль только из цифр

    function onlyNumbersPasswordCheck(resultPassword) {
        const checkNumbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        for (let a = 0; a < resultPassword.length; a++) {
            if (checkNumbersArray.includes(resultPassword[a]) === false) {
                return true;
            }
        }
        return false;
    }
}
