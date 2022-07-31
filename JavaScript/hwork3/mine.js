// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
//     інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x = +prompt('24');
if (x === 0) {
    console.log('Невірно')}

else {
    console.log('Вірно')}










// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

//0-15 === firstPart
//15-30 === secondPart
//30-45 === thirdPart
//45-59 === fourthPart


let time = +prompt('quarters of an hour')
if (time >= 0 && time <= 15) {
    console.log('firstPart')
}
if (time > 15 && time <= 30) {
    console.log('secondPart')
}
if (time > 30 && time <= 45) {
    console.log('thirdPart')
}
if (time > 45 && time <= 59) {
    console.log('fourthPart')
}







// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


let day = +prompt('days of the month')
if (day >= 1 && day <= 10) {
    console.log('firstPart')
}
if (day > 10 && day <= 20) {
    console.log('secondPart')
}
if (day > 20 && day <= 31) {
    console.log('thirdPart')
}









// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).



let day2 = prompt('days of the month2')
switch (day2)
{
    case "1":
        console.log('monday');
        break;
    case "2":
        console.log('tuesday');
        break;
    case "3":
        console.log('wednesday');
        break;
    case "4":
        console.log('thursday');
        break;
    case "5":
        console.log('friday');
        break;
    case "6":
        console.log('saturday');
        break;
    case "7":
        console.log('sunday');
        break;

}







// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.



let n1 = 'num1';
let n2 = 'num2';

if ('num1' > 'num2') {
    console.log('num1');
}
else if ('num1' < 'num2') {
    console.log('num2');
}
else if ('num1' === 'num2') {
    console.log('num1');
}



// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined,
// null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"
//     якщо значення змінної х являється falsy (хибноподыбне, тобто кастується
//     до false)


let x2 = prompt('xd');
if (' ' || 'false') {
    console.log('default')


}

