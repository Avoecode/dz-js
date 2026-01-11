const user = {
    search: 'Вася',
    take: 10,
    getQuery: function () {
        const parts = [];
        for(const key in this) {
             // Исключаем сам метод getQuery из результата
            if (typeof this[key] !== 'function') {
                parts.push(`${key}=${this[key]}`);
            }
        }
        return parts.join('&');
    }
}
console.log(user.getQuery());//search=Вася&take=10