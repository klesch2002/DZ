'use strict';
let income = 'фриланс';
let mission = 2000000;
let period = 12; 
console.log("type income:", typeof income);
console.log(`Период равен ${period} месяцев. Цель заработать ${mission} рублей/долларов/гривен/юани`);
let money = prompt('Каков ваш месячный доход?', '75000');
console.log('type money: ', typeof money);
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'интернет, такси, коммуналка');
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(addExpenses.toLocaleLowerCase().split(","));
console.log("addExpenses:", addExpenses.length);
console.log('type deposit: ', typeof deposit);
let expenses1 = prompt('Введите обязательную статью расходов?', 'такси');
let amount1 = prompt('Во сколько это обойдется?', '10000');
let expenses2 = prompt('Введите обязательную статью расходов?', 'интернет, коммуналка');
let amount2 = prompt('Во сколько это обойдется?', '20000');
let budgetMonth = Number(money) - (Number(amount1) + Number(amount2));
if (isNaN(budgetMonth)) {
    console.log('Критическая ошибка');
} else {
    console.log('Бюджет на месяц: ', budgetMonth);
    console.log(`Цель будет достигнута за: ${Math.ceil(mission / budgetMonth)} месяцев`);
    let budgetDay = budgetMonth / 30;
    console.log('Бюджет на день: ', Math.floor(budgetDay));
    if (budgetDay === 1200) {
        console.log('Вы на границе между высоким и средним уровнем дохода');
    } else if (budgetDay === 600) {
        console.log('Вы на границе между средним и низким уровнем дохода');
    }else if (budgetDay === 0) {
        console.log('У вас чрезвычайно низкий уровень дохода');}   
    else if (budgetDay > 1200) {
        console.log('У вас высокий уровень дохода');
    } else if (budgetDay < 1200 && budgetDay > 600) {
        console.log('У вас средний уровень дохода');
    } else if (budgetDay < 0) {
        console.log('Что то пошло не так');
    } else {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    }
}

