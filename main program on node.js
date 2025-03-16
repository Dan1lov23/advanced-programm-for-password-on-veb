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

    function checkPasswordLevel1(resultPassword) {
        for (let a = 0; a < resultPassword.length; a++) {
            if (resultPassword[a] === resultPassword[a + 1] && resultPassword[a] === resultPassword[a + 2]) {
                return("3 повторяющихся символа подряд представляют угрозу безопасности");
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
                    return("4 одинаковых символа в пароле представляют угрозу безопасности");
                }
            }
        }
    }

    console.log(checkPasswordLevel1("ssdfdrsdd"));

    return resultPassword;
}

main(2, 0, 0);
