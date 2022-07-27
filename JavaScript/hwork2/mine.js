
/*- Створити масив, наповнити його 10 елементами будь-якого типу,
вивести кожен елемент в консоль*/




let cars = ['Fiat', 'Volvo', 'Jeep', 'Ford', 'Mustang', 'Toyota', 'Opel', 'Cherry', 'Audi', 'Honda']
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);
console.log(cars[5]);
console.log(cars[6]);
console.log(cars[7]);
console.log(cars[8]);
console.log(cars[9]);





/*- Створити 3 об'єкти які описують книги. Поля об'єкту
 : title ,pageCount, genre.*/






let book1 = {title: 'Java Script',
    pageCount: 228,
    genre: 'non-faction'};
console.log(book1);

let book2 = {title: 'Open the door',
    pageCount: 123,
    genre: 'horror'};
console.log(book2);

let book3 = {title: 'Thor',
    pageCount: 341,
    genre: 'fantasy'};
console.log(book3);





/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount,
genre, authors. Поле "автори" - масив. Кожен автор має поля name,age*/






let book4 = {
    title: 'Java Script',
    pageCount: 228,
    genre: 'non-faction',
    authors: [
        {name: 'Tom',
            age: 34}
    ]
};
console.log(book4);



let book5 = {
    title: 'Open the door',
    pageCount: 123,
    genre: 'horror',
    authors: [
        {name: 'Justen Braun',
            age: 38}
    ]
};
console.log(book5);




let book6 = {
    title: 'Thor',
    pageCount: 341,
    genre: 'fantasy',
    authors: [
        {name: 'Stan Lee',
            age: 86}
    ]
};
console.log(book6);









/*- Створити масив з 10 об'єктами які описують сутніть "користувач".
Поля: name, username,password. Вивести в консоль пароль кожного користувача*/




let users = [
    {name: 'Mark',
    username: 'mark432',
    password: '"bwgrveve"'},

    {name: 'Lza',
        username: 'liza4842',
        password: '"dgbe3i4nnig"'},

    {name: 'Maks',
        username: 'maks2401',
        password: '"setvhrcw"'},

    {name: 'Tom',
        username: 'tom432',
        password: '"cw4g4y5eh"'},

    {name: 'Elsa',
        username: 'elsa8949',
        password: '"ech56vh5e"'},

    {name: 'Andy',
        username: 'andy775668',
        password: '"e6trhrj6j"'},

    {name: 'Jon',
        username: 'jon353454',
        password: '"cejrjrjrv4"'},

    {name: 'Freddy',
        username: 'freddy695956',
        password: '"trvvjrtrthv"'},

    {name: 'Emma',
        username: 'emma6798',
        password: '"rctjyejyjrj"'},

    {name: 'Tina',
        username: 'tina78695',
        password: '"jrtvrcheth"'},
]

console.table(users, ['password']);

/*
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
*/
