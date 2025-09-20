let hasLicence = true;
let age = 20;
let isDrunk = false;

console.log(`Пользователь может водить машину: ${(hasLicence && age >= 18 && !isDrunk) ? 'может' : 'не может'}`);
