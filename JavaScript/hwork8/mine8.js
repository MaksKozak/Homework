// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)



function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];
users.push(new User(1, 'vasya', 'vasya1', 'vasya@mail', 54254));
users.push(new User(2, 'petya', 'petya2', 'petya@mail', 98743));
users.push(new User(3, 'max', 'max3', 'max@mail', 75326));
users.push(new User(4, 'tom', 'tom4', 'tom@mail', 86265));
users.push(new User(5, 'elsa', 'elsa5', 'elsa@mail', 75853));
users.push(new User(6, 'liza', 'liza6', 'liza@mail', 77854));
users.push(new User(7, 'andriy', 'andriy7', 'andriy@mail', 37379));
users.push(new User(8, 'ihor', 'ihor8', 'ihor@mail', 38983));
users.push(new User(9, 'taras', 'taras9', 'taras@mail', 37272));
users.push(new User(10, 'olga', 'olga10', 'olga@mail', 45862));

console.log(users);



// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)



console.log(users.filter(users => users.id % 2 === 0));



// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)



console.log(users.sort((a, b)=> a.id - b.id));



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів) створити пустий масив, наповнити його 10 об'єктами Client



class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];

clients.push(new Client(772, 'vasya', 'vasya1', 'vasya@mail', 54254, ['way6beuv','wyv6eu6u','rsjrsjrj','rstksrj','trjdtyk','u4wu4u4','ae5y45u5']));
clients.push(new Client(27, 'petya', 'petya2', 'petya@mail', 98743, ['etjjea','zrehehe','srtjstjrsj','rtjrstjsr','rtjrstjrsj','jrstjrtjr']));
clients.push(new Client(37, 'max', 'max3', 'max@mail', 75326, ['herheheh','herhehe','herherher','rtjsrjsrjr']));
clients.push(new Client(773, 'tom', 'tom4', 'tom@mail', 86265, ['hyjrymr','srtrtsj','tejtj','tjtrjrtsj','srtjrjrstj','rtjsrj']));
clients.push(new Client(399, 'elsa', 'elsa5', 'elsa@mail', 75853, ['jsrtjjr','tjrtjrtjr','srtjsrjr','srtjsrtjr','rjsrjsrj']));
clients.push(new Client(379, 'liza', 'liza6', 'liza@mail', 77854, ['hah5h5','5shh54','y35y5y','syv445y4','rstjrsj','srtjsrtj','srtjrstjr']));
clients.push(new Client(47, 'andriy', 'andriy7', 'andriy@mail', 37379, ['h5ajar','jrjr6j','jrtjrj']));
clients.push(new Client(73, 'ihor', 'ihor8', 'ihor@mail', 38983, ['zzrhrtr','srtjsrtj','rtjrsjsr','rtjsrtjs']));
clients.push(new Client(39, 'taras', 'taras9', 'taras@mail', 37272, ['tnjrt', 'ztnzt', 'rhkjhz', 'eehr', 'rsstjr', 'rtsrj', 'shrsg', 'rsrsj']));
clients.push(new Client(97, 'olga', 'olga10', 'olga@mail', 45862, ['ztnztdnn','nernene']));

console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)


console.log(clients.sort((a, b) => a.order.toString().length - b.order.toString().length));





// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car(model, producer, year, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    this.info = function () {
    for (const item in this) {
        if (typeof this[item] !== 'function') {
            console.log(`${item} -- ${this[item]}`);
             }
        }
    }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;

    };


// -- changeYear (newValue) - змінює рік випуску на значення newValue

 this.changeYear = function (newValue) {
     this.year = newValue;

 }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


this.addDriver = function (driver) {
    this.driver = driver;

};

}
let car = new Car('fiat', 'germany', 2007, 180, 1.6);
    console.log(car);
    car.drive();
    car.info();
    car.increaseMaxSpeed(100);
    console.log(car);
    car.addDriver({name: "Maks", age: 22});
    console.log(car);
    car.changeYear(2010);
    console.log(car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class Car1 {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`


    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }


// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`


    info () {
    for (const item in this) {
        if (typeof this[item] !== 'function') {
            console.log(`${item} -- ${this[item]}`);
        }
    }
}


// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed


    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }


// -- changeYear (newValue) - змінює рік випуску на значення newValue


    changeYear (newValue) {
        this.year = newValue;
    }


// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


    addDriver(driver) {
        this.driver = driver;
    }


}

let car1 = new Car1('volvo', 'germany', 2010, 200, 2.4);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(100);
console.log(car1);
car1.addDriver({name: "Rostyk", age: 22});
console.log(car1);
car1.changeYear(2010);
console.log(car1);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderella1 = new Cinderella('Elsa', 20, 34);
let cinderella2 = new Cinderella('Marta', 21, 35);
let cinderella3 = new Cinderella('liza', 22, 36);
let cinderella4 = new Cinderella('Olga', 23, 37);
let cinderella5 = new Cinderella('Alica', 24, 38);

let arr = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5]


class Prince extends Cinderella{
    constructor(name, age, findFootSiza) {
        super(name, age);
        this.findFootSiza = findFootSiza;
    }
}

let prince = new Prince('Tom', 23, 36);

let find = (arr, prince) => {
    for (const item of arr) {
        if (prince.findFootSiza === item.footSize) {
            return `My Cinderella is ${item.name}`
        }
    }
}

console.log(find(arr, prince));

let cinderella = arr.find(value => prince.findFootSiza === value.footSize);
console.log(cinderella);





































