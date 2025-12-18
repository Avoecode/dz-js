const dates = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function filterAndFormatDates(dates) {
    if (!Array.isArray(dates)) return [];// Проверяем, что входные данные - массив

    // Функция для проверки високосного года
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    // Функция для парсинга и валидации даты
    const parseAndValidate = (str) => {
        if (typeof str !== 'string') return null;// Проверяем, что элемент - строка

        let day, month, year;// Переменные для чисел (день, месяц, год)
        let parts;// Переменная для массива строк

        // Определяем формат по разделителю
        if (str.includes('-')) {
            parts = str.split('-');// Разбиваем строку по разделителю '-'
            if (parts.length !== 3) return null;// Должно быть ровно 3 части после разделения
            [day, month, year] = parts.map(Number);//Преобразуем строки в числа и присваиваем переменным. Если строка содержит. → формат DD-MM-YY
        } else if (str.includes('/')) {
            parts = str.split('/');
            if (parts.length !== 3) return null;// Должно быть ровно 3 части после разделения
            [month, day, year] = parts.map(Number);//Преобразуем строки в числа и присваиваем переменным.Если строка содержит / → формат MM/DD.YY
        } else if (str.includes('.')) {
            parts = str.split('.');
            if (parts.length !== 3) return null;// Должно быть ровно 3 части после разделения
            [day, month, year] = parts.map(Number); //Преобразуем строки в числа и присваиваем переменным.Если строка содержит. → формат DD.MM.YY
        } else {
            return null;// Неподдерживаемые форматы игнорируются
        }
        // Проверяем, что все части - числа
        if (isNaN(day) || isNaN(month) || isNaN(year)) return null;

        // Корректируем год для двухзначного формата
        const fullYear = year < 100 ? 2000 + year : year;

        // Проверяем границы
        if (month < 1 || month > 12) return null;
        if (day < 1 || day > 31) return null;

        // Проверяем количество дней в месяце (с учетом високосных лет)
        const febDays = isLeapYear(fullYear) ? 29 : 28;
        const monthDays = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (day > monthDays[month - 1]) return null;
        // Возвращаем корректные значения
        return [day, month, year];
    }
    // Фильтруем и форматируем
    return dates
        .map(str => {
            const parsed = parseAndValidate(str);// Парсим и валидируем строку с датой
            if (!parsed) return null;

            const [day, month, year] = parsed;// Деструктурируем результат парсинга на отдельные переменные
            const formattedDay = day.toString().padStart(2, '0');// Форматируем день: добавляем ведущий ноль, если число однозначное. Например: 1 → "01", 10 → "10"
            const formattedMonth = month.toString().padStart(2, '0');// Форматируем месяц аналогично дню
            const formattedYear = year.toString().slice(-2); // Форматируем год: берем только последние 2 цифры

            return `${formattedDay}.${formattedMonth}.${formattedYear}`;// Собираем все отформатированные части в строку формата "DD.MM.YY"
        })
        .filter(date => date !== null);

}
console.log(filterAndFormatDates(dates));