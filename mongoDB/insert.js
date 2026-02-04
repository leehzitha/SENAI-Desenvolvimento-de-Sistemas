

use('bosch')

// db.people.insertOne({
//     name: "Letícia",
//     lastName: "Burlinski",
//     age: 18,
//     salary: 2100
// })  


// db.people.insertMany([
//     {
//         name: "Anna",
//         lastName: "Guerra",
//         age: 19,
//         salary: 2100
//     },
//     {
//         name: "Lasnine",
//         lastName: "Miranda",
//         age: 18,
//         salary: 2100
//     },
// ])

let pessoa = {
    name: "Zé",
    lastName: "Ninguém",
    age: 20,
    salary: 0.05
}

db.people.insertOne(pessoa)