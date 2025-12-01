const array = [3, 6, 9, 2];// Исходный массив чисел
const deletedF = (x) => x > 5;// Функция удаления

function filterArray(arrNumb, deleteFunc) {
    const result = [];
    for (let i = 0; i < arrNumb.length; i++) {
        // Если функция удаления возвращает false, оставляем элемент
        if (!deleteFunc(arrNumb[i])) {
            result.push(arrNumb[i]);
        }
    }
    return result;
}
const filteredArray = filterArray(array, deletedF);
console.log(`Исходный массив: ${array}`);// [3, 6, 9, 2]
console.log(`Отфильтрованный массив: ${filteredArray}`); // [3, 2]