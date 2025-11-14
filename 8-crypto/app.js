function crypto(password) {
    const chars = password.split('');//Разбиваем на массив символов
    let firstPart = chars.slice(0, 4).reverse(); //Вырезаем pass из массива и записываем в обратном порядке ['p','a','s','s'] -> ['s','s','a','p']
    let secondPart = chars.slice(4);//Вырезаем word из массива 

    // Специальная перестановка для получения 'dorw' вместо 'drow'
    [secondPart[0], secondPart[1], secondPart[2], secondPart[3]] = [secondPart[3], secondPart[1], secondPart[2], secondPart[0]]
   const encode = firstPart.join('') + secondPart.join('');
    return encode
}

function check(encryptedPassword, passwordToCheck) {
    const chekChars = encryptedPassword.split('');
    
    let firstPart2 = chekChars.slice(0, 4).reverse(); // 'ssap' -> 'pass'
    let secondPart2 = chekChars.slice(4);  // 'wrod' -> 'word'
    [secondPart2[0], secondPart2[1], secondPart2[2], secondPart2[3]] = 
    [secondPart2[3], secondPart2[1], secondPart2[2], secondPart2[0]]

    const decrypted = firstPart2.join('') + secondPart2.join('');//Объеденяем две части массива в один
    return decrypted === passwordToCheck;


}
console.log(crypto('password'));//Вводим пароль
console.log(check('ssapdorw', 'password')); // true (возвращает true, если он совпадает со втором паролем)
console.log(check('ssapdorw', 'wrong')); // false (и false, если нет)
