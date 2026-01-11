const user = {
    search: 'Вася',
    take: 10,
    getQuerty: function () {
        const parts = [];
        for(const key in this) {
             // Исключаем сам метод getQuery из результата
            if (typeof this[key] !== 'function') {
                parts.push(`${key}=${user[key]}`);
            }
        }
        return parts.join('&');
    }
}
console.log(user.getQuerty());//search=Вася&take=10