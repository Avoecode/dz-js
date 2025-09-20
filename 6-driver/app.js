let hasLicence = true;
let age = 20;
let isDrunk = false;

const canDrive = hasLicence && age >= 18 && !isDrunk;

console.log(`Пользователь может водить машину: ${canDrive ? 'Может' : 'Не может'}`);
