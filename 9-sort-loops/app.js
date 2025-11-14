const arr = [1, 40, -5, 10, 0];

function sortedArray(arr) {
    const sortedArray = [...arr]; // Создаем копию массива
    const n = sortedArray.length;
    for ( let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 -i; j++) {
            // Сравниваем соседние элементы:
            if (sortedArray[j] > sortedArray[j + 1]) { // Меняем местами, если текущий элемент больше следующего
                //Сохраняем значение во временную переменную:
                const temp = sortedArray[j]; // sortedArray[j] - текущий элемент массива, temp - временная переменная, которая сохраняет значение sortedArray[j]
                //Присваиваем текущему элементу значение следующего:
                sortedArray[j] = sortedArray[j + 1];//sortedArray[j + 1] - следующий элемент массива, Теперь sortedArray[j] получает значение sortedArray[j + 1]. Аналогия: Вы берете апельсин из правой руки и кладете в левую руку
                //Восстанавливаем значение из временной переменной:
                sortedArray[j + 1] = temp;
            }
        }
    }
    return sortedArray
}
console.log(sortedArray(arr));