
let lang = prompt('На каком языке вы говорите (What language do you speak)?');

switch (lang) {
    case 'english':
        console.log('Hello!');
        break
    case 'русский':
        console.log('Здравствуйте!');
        break
    case 'deutsch':
        console.log('Hallo!');
        break
    case 'français':
        console.log('Bonjour!');
        break
    case 'español':
        console.log('¡Hola!');
        break
    default:
        console.log('Язык не поддерживается!');
}


