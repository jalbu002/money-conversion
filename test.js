// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


test("One dollar should be 134.94 dollars", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(3.5)

    // if 1 dollar are 134.94 Yen, then 3.5 dollars should be (3.5 * 135)
    const expected = 3.5 * 134.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(472.5); //1 dollar are 134.9 Yen, then 3.5 dollars should be = (3.5 * 135)
})

test("One Yen should be .006 Pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromYenToPound(3.5)

    // if 1 Yen are 0.006 Pounds, then 3.5 dollars should be (3.5 * 0.006)
    const expected = 3.5 * 0.006; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.021); //1 yen are 0.006 Pounds, then 3.5 Yen should be = (3.5 * 0.006)
})