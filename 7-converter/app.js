//Курсы
const EXC_USD_RUB = 82.8;//доллар к рублю
const EXC_EUR_RUB = 97.6;//евро к рублю
const EXC_THB_RUB = 2.57;//тайский бат к рублю

function calculateEx(amountOfMoney, originalCurrency, targetCurrency) {
    if (originalCurrency === 'RUB' && targetCurrency === 'USD') {
        return amountOfMoney / EXC_USD_RUB;//пересчет из рублей в доллары
    } else if (originalCurrency === 'USD' && targetCurrency === 'RUB') {
        return amountOfMoney * EXC_USD_RUB;//пересчет из доллары в рубли
    } else if (originalCurrency === 'RUB' && targetCurrency === 'EUR') {
        return amountOfMoney / EXC_EUR_RUB;//пересчет из рублей в евро
    } else if (originalCurrency === 'EUR' && targetCurrency === 'RUB') {
        return amountOfMoney * EXC_EUR_RUB;//пересчет из евро в рубли
    } else if (originalCurrency === 'RUB' && targetCurrency === 'THB') {
        return amountOfMoney / EXC_THB_RUB;//пересчет из рублей в баты
    } else if (originalCurrency === 'THB' && targetCurrency === 'RUB') {
        return amountOfMoney * EXC_THB_RUB;//пересчет из бат в рубли  
    } else {
        return null; // для неподдерживаемых валют
    }
}
    
console.log(calculateEx(10000, 'EUR', 'RUB'));
