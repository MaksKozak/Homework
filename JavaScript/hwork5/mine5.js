// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//___________________________________________________________________________________________

function areaOfRectangle(a, b) {
    let solRectangle = a * b;
    return solRectangle;
}

console.log(areaOfRectangle(2, 10));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
//___________________________________________________________________________________________

function areaOfCircle(r) {
    let solCircle = 3.14 * r * 2;
    return solCircle;
}

console.log(areaOfCircle(2))


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//___________________________________________________________________________________________
function areaOfCylinder(h, r) {
    let solCylinder = 2 * 3.14 * r * (h + r);
    return solCylinder;
}


console.log(areaOfCylinder(2, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент
//___________________________________________________________________________________________


let arr1 = ['abcd', 'dcba', 'cbda', 'badc', 'adbc'];

function deduceArray(arr) {
    for (const item of arr1) {
        return item;
    }
}

console.log(arr1);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//___________________________________________________________________________________________
function paragraph(text) {
document.write (`<div>${text}</div>`);
}

paragraph('hello');
paragraph('okten');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім
// однаковий
//___________________________________________________________________________________________
function list(ulli) {
    document.write(`<ul>
<li>${'hello okten'}</li>
<li>${'hello okten'}</li>
<li>${'hello okten'}</li>
</ul>`)

}

list('xxx');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім
// однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//___________________________________________________________________________________________

function listFor(li, c) {
    document.write(`<ul>`);
    for (i = 0; i < c; i++) {
        const cElement = c[i];
        document.write(`<li>${li}</li>`);
    }
    document.write(`</ul>`);
}
listFor('text', 3);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для
// них список
//___________________________________________________________________________________________

let arr2 = [10, 20, 'string', true, false];
function arrList(e) {
    document.write('<ol>')
    for (let eElement of e) {
        document.write(`<li>${eElement}</li>`);
    }
    document.write('</ol>')
}
arrList(arr2);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
//___________________________________________________________________________________________
let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

function arrayUsers(r) {
    for (const rElement of r) {
        document.write(`<div>${rElement.id} ${rElement.name} ${rElement.age}</div>`);

    }
}

arrayUsers(users);


// - створити функцію яка повертає найменьше число з масиву
//___________________________________________________________________________________________

let arr3 = [32, 76, 23, 86, 23245, 29];

function minNumber(arr3) {
    return Math.min.apply(null, arr3);
}

document.write(minNumber(arr3));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
//___________________________________________________________________________________________

let arr4 = [3,2,5,6];
function arraySum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
   document.write(sum);
}
arraySum(arr4);



