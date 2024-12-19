/**
    Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
    К вам приходит заказчик и предлагает заказ на 40 часов работы.
    Сейчас понедельник.
    Вы должны уехать через 11 дней.
    Выведите в консоль:
    - boolean переменную успеете ли вы взяться за рабту
    - Сколько вы за нее просите?
 */

const payRateUSD = 80;
const projectHours = 40;
const availibleHours = (11 - 2) * 5;
const workAbility = availibleHours >= projectHours;
const salary = projectHours * payRateUSD;
console.log("Готовность к работе: " + workAbility);
console.log("Заработок: " + salary + "$");