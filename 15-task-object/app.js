'use strict'
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
        const sortedTasks = [...this.tasks];
        this.tasks.sort((a, b) => a.priority - b.priority);
        return sortedTasks
    }
}
ToDoList.addTask('Сделать уроки', 1, 2);
ToDoList.addTask('Покормить кота', 2, 1);
ToDoList.addTask('Помыть посуду', 3, 3);

//Обновленный список
console.log('Список после добавления задач:', ToDoList.tasks);

//Удаление задач
ToDoList.deleteTask(2);

//Обновленный список
console.log('Список после удаления задачи:', ToDoList.tasks);


// Обновляем задачу
ToDoList.updateTask(1, { title: 'Приготовить ужин' });

//Обновленный список
console.log('Список после обновления задач:', ToDoList.tasks);

//Отсортированный список по приоритету
ToDoList.sortByPriority();


