//так задумано чтобы сначало показалось you win! а потом вы вышли из игры! исправляется путем добавления else 
const guess = () => {
    const random = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        // min = Math.ceil(min);
        // max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    let r = random(1, 10);// рандомное число
    tryGuess = () => {
        for (let p = true; p != r && p;) {
            let p = prompt('Отгадай число что я загадал от 1 до 10');
            if (p == r) {
                alert('You win!'); break;
            } else if (p < r && p) {
                alert('мое число чуть больше!');
            } else if (p > r && p) {
                alert('мое число чуть меньше!');
            } else {
                alert('Вы вышли из игры!'); break;
            }
        }
    }

};

guess();
tryGuess();

