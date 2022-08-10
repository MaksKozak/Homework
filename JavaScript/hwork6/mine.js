// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'


let str1 = 'hello world';
console.log(str1.length);

let str2 = 'lorem ipsum';
console.log(str2.length);

let str3 = 'javascript is cool';
console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'


let str11 = 'hello world';
console.log(str11.toUpperCase());


let str22 = 'lorem ipsum';
console.log(str22.toUpperCase());


let str33 = 'javascript is cool';
console.log(str33.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


let str111 = 'HELLO WORLD';
console.log(str111.toLowerCase());


let str222 = 'LOREM IPSUM';
console.log(str222.toLowerCase());


let str333 = 'JAVASCRIPT IS COOL';
console.log(str333.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


let str0 = ' dirty string   ';
console.log(str0.substring(1, 13));


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


let str = 'Ревуть воли як ясла повні';
let split = str.split(' ');
console.log(split);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити
// всі об'єкти в масиві на стрінгові.

let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let map = arr.map(value => value + '');
console.log(map);



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його
// від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


let nums = [11,21,3];
function sortNums(nums1, direction){
    if (direction==='ascending'){
        nums1.sort((num1, num2) => num1 - num2)
    }
    if (direction==='descending'){
        nums1.sort((num1, num2) => num2 - num1)
    }
}
sortNums(nums, 'ascending')
console.log(nums);
sortNums(nums, 'descending')
console.log(nums);



// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray.sort((n1, n2) => n2.monthDuration - n1.monthDuration);
console.log(coursesAndDurationArray);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = [];
for (const coursesAndDurationArr of coursesAndDurationArray) {
     if (coursesAndDurationArr.monthDuration > 5) {
          filter.push(coursesAndDurationArr);
     }

}
console.log(filter);



// описати колоду карт


// let cards = [
//     {cardSuit: 'spade',     value: 'ace',       color: 'red'},
//     {cardSuit: 'diamond',   value: 'king',      color: 'black'},
//     {cardSuit: 'heart',     value: 'queen',     color: 'red'},
//     {cardSuit: 'clubs',     value: '7',         color: 'black'},
//     {cardSuit: 'spade',     value: 'joker',     color: 'red'},
//     {cardSuit: 'diamond',   value: 'jack',      color: 'black'},
//     {cardSuit: 'heart',     value: '6',         color: 'red'},
//     {cardSuit: 'clubs',     value: 'king',      color: 'black'},
//     {cardSuit: 'spade',     value: '10',        color: 'red'},
//     {cardSuit: 'diamond',   value: '6',         color: 'black'},
//     {cardSuit: 'heart',     value: 'ace',       color: 'red'},
//     {cardSuit: 'clubs',     value: '8',         color: 'black'},
//     {cardSuit: 'spade',     value: 'queen',     color: 'red'},
//     {cardSuit: 'diamond',   value: '9',         color: 'black'},
//     {cardSuit: 'heart',     value: 'joker',     color: 'red'},
//     {cardSuit: 'clubs',     value: 'jack',      color: 'black'},
//     {cardSuit: 'spade',     value: 'king',      color: 'red'},
//     {cardSuit: 'diamond',   value: 'queen',     color: 'black'},
//     {cardSuit: 'heart',     value: 'ace',       color: 'red'},
//     {cardSuit: 'clubs',     value: 'jack',      color: 'black'}
// ];
//


// - знайти піковий туз


// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade'-пика, 'diamond'-буба,'heart'-черва, 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }





// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let cards1 = [
//     {cardSuit: 'spade',     value: 'ace',       color: 'red'},
//     {cardSuit: 'diamond',   value: 'king',      color: 'black'},
//     {cardSuit: 'heart',     value: 'queen',     color: 'red'},
//     {cardSuit: 'clubs',     value: '7',         color: 'black'},
//     {cardSuit: 'spade',     value: 'joker',     color: 'red'},
//     {cardSuit: 'diamond',   value: 'jack',      color: 'black'},
//     {cardSuit: 'heart',     value: '6',         color: 'red'},
//     {cardSuit: 'clubs',     value: 'king',      color: 'black'},
//     {cardSuit: 'spade',     value: '10',        color: 'red'},
//     {cardSuit: 'diamond',   value: '6',         color: 'black'},
//     {cardSuit: 'heart',     value: 'ace',       color: 'red'},
//     {cardSuit: 'clubs',     value: '8',         color: 'black'},
//     {cardSuit: 'spade',     value: 'queen',     color: 'red'},
//     {cardSuit: 'diamond',   value: '9',         color: 'black'},
//     {cardSuit: 'heart',     value: 'joker',     color: 'red'},
//     {cardSuit: 'clubs',     value: 'jack',      color: 'black'},
//     {cardSuit: 'spade',     value: 'king',      color: 'red'},
//     {cardSuit: 'diamond',   value: 'queen',     color: 'black'},
//     {cardSuit: 'heart',     value: 'ace',       color: 'red'},
//     {cardSuit: 'clubs',     value: 'jack',      color: 'black'}
// ];
//
//
// let reduce = cards1.reduce(function (accumulator, card1) {
//     if (card1.cardSuit) {
//         accumulator.cardSuit = 'spade'.push(card1);
//     }
//     if (card1.cardSuit) {
//         accumulator.cardSuit = 'diamonds'.push(card1);
//     }
//     if (card1.cardSuit) {
//         accumulator.cardSuit = 'hearts'.push(card1);
//     } else {
//         accumulator.cardSuit = 'clubs'.push(card1);
//     }
//
//
//     return accumulator;
//
// },  {'spade': [{}], 'diamonds': [], 'hearts': [], 'clubs': []});
// console.log(reduce);
