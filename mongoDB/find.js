use('bosch')

db.people.insertMany ([
    {
        name: 'Letícia',
        lastName: 'Burlinski',
        age: 18,
        salary: 2100
    },
    {
        name: 'Anna',
        lastName: 'Guerra',
        age: 19,
        salary: 2100
    },
    {
        name: 'Lasnine',
        lastName: 'Miranda',
        age: 18,
        salary: 2100
    },
    {
        name: 'Queila',
        lastName: 'Lima',
        age: 25,
        salary: 7000
    },
    {
        name: 'Fabio',
        lastName: 'Silveira',
        age: 53,
        salary: 20000
    },
    {
        name: 'Patrick',
        lastName: 'Bigode',
        age: 24,
        salary: 4000
    },
    {
        name: 'Cesar',
        lastName: 'Stati',
        age: 50,
        salary: 5000
    }, 
    {
        name: 'Nicolas',
        lastName: 'Marques',
        age: 21,
        salary: 5000
    },
    {
        name: 'Edson',
        lastName: 'Eshima',
        age: 57,
        salary: 12000
    },
    {
        name: 'Leonardo',
        lastName: 'Trevisan',
        age: 26,
        salary: 7000
    }


])

use('bosch')
db.people.find({ name: /^C/ })