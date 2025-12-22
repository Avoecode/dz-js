const numberCard = '4561-2612-1234-5464';

function luna(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Аргумент должен быть строкой');
    }
    // Убираем дефисы
    const cleaned = str.replaceAll('-', '');

    // Проверяем, что все символы - цифры
    for (let char of cleaned) {   
        if (char < '0' || char > '9') {
            return false;
        }
    }
    // Преобразуем строку в массив чисел
    const numbers = cleaned.split('').map(Number);  
    const filterNumber = numbers.map((num, i) => {
        if (i % 2 === 0) {
            const doubled = num * 2;
            return doubled > 9 ? doubled - 9 : doubled;
        }
        return num;
    });
    const sumOfNumber = filterNumber.reduce((sum, current) => sum + current, 0);
    
    if (sumOfNumber % 10 === 0) {
        return true;
    } else {
        return false
    }
}
console.log(luna(numberCard));
