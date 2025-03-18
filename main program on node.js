function main(letters, numbers, symbols) {

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

    while (lettersCounter <= letters) {
        resultPassword += lettersArray[getRandomInt(0, (lettersArray.length - 1))];
        lettersCounter++;
    }

    while (numbersCounter <= numbers) {
        resultPassword += numbersArray[getRandomInt(0,(numbersArray.length - 1))];
        numbersCounter++;
    }

    while (specialSymbolCounter <= symbols) {
        resultPassword += specialCharactersArray[getRandomInt(0, (specialCharactersArray.length - 1))];
        specialSymbolCounter++;
    }

    console.log(resultPassword);

    // модуль проверки

    // тест для проверки на три повторяющихся символа в пароле подряд

    function testPasswordOne(resultPassword) {
        for (let a = 0; a < resultPassword.length; a++) {
            if (resultPassword[a] === resultPassword[a + 1] && resultPassword[a] === resultPassword[a + 2]) {
                console.log("3 повторяющихся символа подряд представляют угрозу безопасности");
            }
        }
    }

    // тест для проверки на 4 одинкавых символа подряд

    function testPasswordTwo(resultPassword) {
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

    return resultPassword;
}

main(2, 0, 0);
