const users = [
    { name: 'John', age: 38, isEmployed: true },
    { name: 'Jane', age: 29, isEmployed: false },
    { name: 'Joe', age: 41, isEmployed: true }
]

const addUser = (user) => {
    // check if user is an object
    if(typeof user !== 'object' || user.length > 0){
        throw new Error("User details expected as an object")
    }

    let nameCheck = typeof user.name === 'undefined' || typeof user.name !== 'string' 
    let ageCheck = typeof user.age === 'undefined' || typeof user.age !== 'number'
    let empCheck = typeof user.name === 'undefined' || typeof user.name !== 'string'

    // check if all fields are present & of the correct type
    if(nameCheck || ageCheck || empCheck){
        throw new Error("Enter fields with valid values")
    }

    // check validity of values
    if(user.age >= 120){
        throw new Error("Age must be a valid number less than 120")
    }

    if(user.name.length >= 100){
        throw new Error("Name must not be more than 100 characters")
    }

    users.push(user)
    return "OK"
}

module.exports = addUser