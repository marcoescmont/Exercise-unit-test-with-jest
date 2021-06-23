
const { sum } = require('./app.js');


 //first test//


test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);

    expect(total).toBe(23);
});


// Euro to Dollar function//


test("One euro should be 1.206 dollars", function(){

    const { fromEuroToDollar } = require('./app.js')

    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2; 
    
     expect(fromEuroToDollar(3.5)).toBe(4.2);})


// Dollar to Yen function//


test("One dollar should be 153.48 yens", function(){

    const { fromDollarToYen } = require('./app.js')

    const yens = fromDollarToYen(3.5)

    const expected = 3.5 * 153.48; 

     expect(fromDollarToYen(3.5)).toBe(537.18);
})


// Yen to Pound function//


test("One yen should be 122.784 punds", function(){
    const { fromYenToPound } = require('./app.js')

    const pounds = fromYenToPound(3.5)

    const expected = 3.5 * 122.784; 
    
     expect(fromYenToPound(3.5)).toBe(429.744);})

