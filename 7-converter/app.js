//Курсы
const EXC_USD_RUB = 82.8;//доллар к рублю
const EXC_EUR_RUB = 97.6;//евро к рублю
const EXC_THB_RUB = 2.5;//тайский бат к рублю
const EXC_EUR_THB = 38.03;//евро к бату
const EXC_USD_EUR = 1.18;//доллар к евро
const EXC_USD_THB = 32.35;//доллар к бату


function calculateEx(amountOfMoney, originalCurrency, targetCurrency) {
    if (originalCurrency === 'RUB' && targetCurrency === 'USD') {
        return amountOfMoney / EXC_USD_RUB;//рубли в доллары
    } else if (originalCurrency === 'USD' && targetCurrency === 'RUB') {
        return amountOfMoney * EXC_USD_RUB;//доллары в рубли
    } else if (originalCurrency === 'USD' && targetCurrency === 'THB') {
        return amountOfMoney * EXC_USD_THB;//доллары в баты
    } else if (originalCurrency === 'THB' && targetCurrency === 'USD') {
        return amountOfMoney / EXC_USD_THB;//баты в доллары 
    } else if (originalCurrency === 'USD' && targetCurrency === 'EUR') {
        return amountOfMoney / EXC_USD_EUR;//доллары в евро
    } else if (originalCurrency === 'EUR' && targetCurrency === 'USD') {
        return amountOfMoney * EXC_USD_EUR;//евро в доллары 
    } else if (originalCurrency === 'RUB' && targetCurrency === 'EUR') {
        return amountOfMoney / EXC_EUR_RUB;//рубли в евро
    } else if (originalCurrency === 'EUR' && targetCurrency === 'RUB') {
        return amountOfMoney * EXC_EUR_RUB;//евро в рубли
    } else if (originalCurrency === 'THB' && targetCurrency === 'EUR') {
        return amountOfMoney / EXC_EUR_THB;//баты в евро
    } else if (originalCurrency === 'EUR' && targetCurrency === 'THB') {
        return amountOfMoney * EXC_EUR_THB;//евро в баты
    } else if (originalCurrency === 'RUB' && targetCurrency === 'THB') {
        return amountOfMoney / EXC_THB_RUB;//рубли в баты
    } else if (originalCurrency === 'THB' && targetCurrency === 'RUB') {
        return amountOfMoney * EXC_THB_RUB;//баты в рубли  
    } else {
        return null; // для неподдерживаемых валют
    }
}
    
console.log(calculateEx(2000, 'RUB', 'EUR'));
console.log(calculateEx(5500, 'THB', 'USD'));

