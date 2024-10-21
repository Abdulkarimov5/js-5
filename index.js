/* function rangeSum(start, end) {
    let sum = start
    while (start < end){
        start++
        sum += start
    }


    // for (let i = start + 1; i <= end; i++) {
    //     sum += i
    // }
    return sum
}

console.log(rangeSum(1, 5))
console.log(rangeSum(2, 5))
console.log(rangeSum(4, 4)) */

/* function getDividers(num) {
    let result = []
    for (let i = 1; i <= num; i++) {
        if (num % i === 0){
            result.push(i)
        }
    }
    return result
}

console.log(getDividers(15))
console.log(getDividers(36))
console.log(getDividers(37)) */

/* function factorial(num) {
    let result = 1
    let i = 1
    while (i < num) {
    i++
    result *= i
    }
    return result
}

console.log(factorial(5))
console.log(factorial(3))
console.log(factorial(1)) */

/* class Transport {
    constructor(pass) {
        this.passengersCount = pass
    }

    move() {
        console.log("Я еду")
    }

    signal() {
        console.log("Я бибикаю")
    }
}

class Car extends Transport {
    constructor() {
        super(5)
    }
}

class Boat extends Transport {
    constructor(pass) {
        super(pass)
    }
}

class Train extends Transport {
    constructor(pass) {
        super(pass)
    }
}

class Plane extends Transport {
    constructor(pass) {
        super(pass)
    }

    signal() {
        console.log(`Моргаю ${this.paintLighters} цветами`)
    }

    paintLighters() {
        return "зеленый и красный"
    }
}

let car = new Car()
let boat = new Boat(12)
let train = new Train(120)
let palne = new Plane(200)

console.log(`
    В автомобиле ${car.passengersCount} пассажиров
    В лодке ${boat.passengersCount} пассажиров
    В поезде ${train.passengersCount} пассажиров
    В самолете ${palne.passengersCount} пассажиров
`)

car.signal()
boat.signal()
train.signal()
palne.signal() */

class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }

    getInfo() {
        return `
        Название: '${this.title}'
        Автор: '${this.author}'
        Год: '${this.year}'
        `
    }

    set newTitle(newTitle) {
        this.title = newTitle
    }

    set newYear(newYear) {
        this.year = newYear
    }
}

let book1 = new Book("1984", "Дж. Оруэлл", 1984);
let book2 = new Book("Преступление и наказание", "Ф.М.Достоевский", 1880);

console.log(book1.getInfo())
console.log(book2.getInfo())

book2.newTitle = "Идиот"
book2.newYear = 1885
console.log(book2.getInfo())