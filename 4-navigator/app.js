//Рассчитаем расстояние между точкам P(текущее положение) и A(адрес назначения) 

//Координаты точки P:
const positionLat = 10; // x₁
const positionLong = 15; //y₁

//Координаты точки A:
const addressLat = 14; //x₂
const addressLong = 18; //y₂

//Считаем по формуле d = √(x₂ — x₁)² + (y₂ — y₁)²

//Вариант 1:
console.log(Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2));

//Вариант 2:

//Разница между координатами:
const differenceX = addressLat - positionLat;
const differenceY = addressLong - positionLong;

//Возведем результаты в квадрат и сложим:
console.log((differenceX) ** 2 + (differenceY) ** 2);

// Извлечем квадратный корень:
console.log(Math.sqrt(25));