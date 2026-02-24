'use strict'
//Напишите калькулятор, который позволяет ввести 2 числа в 2 input, и нажать на кнопку операции (сложение, деление, вычитание, умножение)
//Выведите результат в отдельное поле.

// Запускаем инициализацию после загрузки DOM
document.addEventListener('DOMContentLoaded', initCalculator);

function initCalculator() {
	//Находим элементы
	const panel = document.querySelector('.panel-result');// поле для вывода результата
	const inputValue1 = document.querySelector('.input-value1');// первое поле ввода
	const inputValue2 = document.querySelector('.input-value2');// второе поле ввода
	const btnAdd = document.querySelector('.button-addition');// кнопка сложения
	const btnSub = document.querySelector('.button-subtraction');// кнопка вычитания
	const btnMul = document.querySelector('.button-multiply');// кнопка умножения
	const btnDiv = document.querySelector('.button-division');// кнопка деления

	// Проверяем наличие критических элементов (поля и панель)
	if (!panel || !inputValue1 || !inputValue2) {
		if (!panel) console.error('Элемент .panel-result не найден');
		if (!inputValue1) console.error('Элемент .input-value1 не найден');
		if (!inputValue2) console.error('Элемент .input-value2 не найден');
		return // дальше не продолжаем
	}

	// Вспомогательная функция для получения чисел из полей ввода
	function getValidNumbers() {
		const value1 = inputValue1.value.trim();
		const value2 = inputValue2.value.trim();

		// Проверяем, что оба поля заполнены
		if (value1 === '' || value2 === '') {
			panel.textContent = 'Ошибка: заполните оба поля';
			return null;
		}
		//Преобразуем строки из полей ввода в числа
		const num1 = Number(value1);
		const num2 = Number(value2);

		// Проверка, что введены именно числа (не NaN)
		if (isNaN(num1) || isNaN(num2)) {
			panel.textContent = 'Ошибка: введите числа';
			return null;
		}

		return { num1, num2 };// функция возвращает объект { num1, num2 } или null в случае ошибки
	}
	function addition() {
		const nums = getValidNumbers();
		if (!nums) return; // если ошибка – выход
		//Сложение 
		const res = nums.num1 + nums.num2;
		panel.innerText = `Результат сложения  ${res}`;
		console.log(`Результат сложения равен  ${res}`);
		//Очищаем поле ввода
		inputValue1.value = '';
		inputValue2.value = '';
	}
	function subtraction() {
		const nums = getValidNumbers();
		if (!nums) return; // если ошибка – выход
		//Вычитание
		const res = nums.num1 - nums.num2;
		panel.innerText = `Результат вычитания  ${res}`;
		console.log(`Результат вычитания равен  ${res}`);
		//Очищаем поле ввода
		inputValue1.value = '';
		inputValue2.value = '';
	}
	function multiplication() {
		const nums = getValidNumbers();
		if (!nums) return; // если ошибка – выход
		//Умножение
		const res = nums.num1 * nums.num2;
		panel.innerText = `Результат умножения  ${res}`;
		console.log(`Результат умножения равен  ${res}`);
		//Очищаем поле ввода
		inputValue1.value = '';
		inputValue2.value = '';
	}
	function division() {
		const nums = getValidNumbers();
		if (!nums) return; // если ошибка – выход
		// Проверка деления на ноль
		if (nums.num2 === 0) {
			panel.textContent = 'Ошибка: деление на ноль';
			return;
		}
		//Деление
		const res = nums.num1 / nums.num2;
		panel.innerText = `Результат деления  ${res}`;
		console.log(`Результат деления равен  ${res}`);
		//Очищаем поле ввода
		inputValue1.value = '';
		inputValue2.value = '';
	}
	// Навешиваем обработчики на кнопки
	if (btnAdd) btnAdd.addEventListener('click', addition);
	if (btnSub) btnSub.addEventListener('click', subtraction);
	if (btnMul) btnMul.addEventListener('click', multiplication);
	if (btnDiv) btnDiv.addEventListener('click', division);
}
