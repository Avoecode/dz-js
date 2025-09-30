//Курсы
const EXC_USD_RUB = 82.8;//доллар к рублю
const EXC_EUR_RUB = 97.6;//евро к рублю
const EXC_THB_RUB = 2.57;//тайский бат к рублю

function calculateEx(amountOfMoney, originalCurrency, targetCurrency) {
    switch (originalCurrency, targetCurrency) {
        case 'RUB' && 'USD':
            return res = amountOfMoney / EXC_USD_RUB
        case 'USD' && 'RUB':
            return res = amountOfMoney * EXC_USD_RUB
        case 'RUB' && 'EUR':
            return res = amountOfMoney / EXC_EUR_RUB
        case 'EUR' && 'RUB':
            return res = amountOfMoney * EXC_EUR_RUB
        case 'RUB' && 'THB':
            return res = amountOfMoney / EXC_THB_RUB
        case 'THB' && 'RUB':
            return res = amountOfMoney * EXC_THB_RUB
        case 'RUB' && 'QAR':
            return null
        case 'QAR' && 'RUB':
            return null
    }
}
console.log(calculateEx(10000, 'THB', 'RUB'));

