var expect = require('chai').expect
const addUser = require('../index')

describe('#addUser()', function(){
    context('without arguments', function(){
        it('should throw Error on no arguments', function(){
            expect(function(){
                addUser()
            }).to.throw(Error, 'User details expected as an object')
        })
    })
    context('with arguments', function(){
        it('should throw Error on empty object', function(){
            expect(function(){
                addUser({})
            }).to.throw(Error, 'Enter fields with valid values')
        })

        it('should throw Error if name field is not present', function(){
            expect(function(){
                addUser({ age: 34, isEmployed: false})
            }).to.throw(Error, 'Enter fields with valid values')
        })
        it('should throw Error if name is not of String type', function(){
            expect(function(){
                addUser({ name: 34, age: 34, isEmployed: false})
            }).to.throw(Error, 'Enter fields with valid values')
        })
        it('should throw Error if age is not of type number', function(){
            expect(function(){
                addUser({ name: 'XYZ', age: 'ABC', isEmployed: false})
            }).to.throw(Error, 'Enter fields with valid values')
        })

    })
})

