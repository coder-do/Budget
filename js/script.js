let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
};
start();


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done!');
            appData.expenses[a] = b;
        } else {
            --i;
        }
    }
};
chooseExpenses();


appData.monyPerDay = (appData.budget / 30).toFixed();

alert('Ежедневный бюджет: ' + appData.monyPerDay);


if (appData.monyPerDay < 100) {
    console.log('saas');
} else if (appData.monyPerDay > 100 && appData.monyPerDay < 2000) {
    console.log('jk');
} else if (appData.monyPerDay > 2000) {
    console.log('jhj');
} else {
    console.log('error');
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');
        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    };
};

checkSavings();