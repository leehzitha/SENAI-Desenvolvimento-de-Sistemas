use('bosch')

db.people.deleteOne( { email: /daniel/i})

use('bosch')
db.people.deleteMany( { cidade: /curitiba/i })