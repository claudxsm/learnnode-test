const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44).toBeA("number");
        });

    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA("number");
            done();
        })
    })

    it('should square a number', () => {
        var res = utils.square(12);
        expect(res).toBe(144).toBeA("number");
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(12, (square) => {
            expect(square).toBe(144).toBeA("number");
            done();
        })
    });
});


it('should verify first and last names are set', () => {
    var user = {
        name: 'bob',
        age: 25,
        location: 'here'
    };
    var res = utils.setName(user, 'bob smith');
    expect(res).toInclude({
        firstName: 'bob',
        lastName: 'smith'
    });
});



// it('should expect some values', () => {

//     expect({
//         name: 'bob', 
//         age: 25, 
//         location: 'here'
//     }).toInclude({ name: 'bob' });

//     //expect([2,3,4]).toExclude(5);
//     //expect({name:'Bob'}).toEquab({name:'Bob'});
//     //expect(12).toNotBe(11);
// });