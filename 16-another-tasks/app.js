'use strict'
//Возьмите объект ToDoList и последовательно примените его все методы на новый объект:

const ToDoList = {
    tasks: [],
    addTask: function (title, id, priority) {
        this.tasks.push({ title, id, priority });
        console.log(`Задача добавлена: "${title}" (id: ${id}, приоритет: ${priority})`);
    },
    deleteTask: function (id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        console.log(`Удалена задача с id ${id}`);
    },
    updateTask: function (id, updates) {
        //Ищем задачу в массиве tasks по переданному id
        const task = this.tasks.find(task => task.id === id);
        // проверяем, найдена ли задача
        if (!task) {
            //Если задача не найдена, выводим сообщение об ошибке
            console.log('Задача не найдена');
            return
        }
        // Проверяем на наличие свойства title (даже если это пустая строка)
        if (updates.title !== undefined) {
            // Если новое значение title передано, обновляем свойство title у найденной задачи
            task.title = updates.title;
        }
        // Проверяем на наличие свойства priority (даже если это 0)
        if (updates.priority !== undefined) {
            // Если новое значение priority передано, обновляем свойство priority у найденной задачи
            task.priority = updates.priority;
        }
        console.log(`Задача с id ${id} обновлена`);
        return task
    },
    sortByPriority: function () {
        this.tasks.sort((a, b) => a.priority - b.priority);
        console.log('Задачи отсортированы по приоритету (по возрастанию)')
    }
}
//Новый объект
const newTask = {
    tasks: [{
        id: 1,
        name: 'тест',
        description: 'описание',
        order: 0
    }]
};
//Добавляем задачи в новый объект(используем метод addTask)
ToDoList.addTask.call(newTask, 'Постирать вещи', 1, 2);
ToDoList.addTask.call(newTask, 'Выпить витамины', 3, 3 );
ToDoList.addTask.call(newTask, 'Позаниматься гимнастикой', 2, 1);

console.log('Список после добавления задач:', newTask.tasks);

//Удаление задачи(используем метод deleteTask)
ToDoList.deleteTask.call(newTask, 3);

console.log('Список после удаления задач:', newTask.tasks);

// Обновляем задачу
const newUpDateList = ToDoList.updateTask.bind(newTask) 
newUpDateList(2, { title: 'Сделать домашнее задание' });

//Список задач после обновления
console.log('Список после обновления задач:', newTask.tasks);

//Отсортированный список по приоритету
const newSortByPriority = ToDoList.sortByPriority.bind(newTask)
newSortByPriority();

//Список задач после сортировки
console.log('Список отсортированных задач:', newTask.tasks);









