const cart = require('./cart');
const cars = require('./data/cars');

describe('Cart Properties', () => {
    test('should expect cart to be empty array', () => {
        expect( Array.isArray( cart.cart ) ).toEqual( true )
        expect( cart.cart.length ).toEqual( 0 )
    })
    test('Cart total should be 0', () => {
        expect( cart.total ).toEqual(0)
    })
})

describe('Cart Methods', () => {
    afterEach( () => {
        cart.cart = []
        cart.total = 0
    })

    // addToCart method
    test('addToCart() should add a car object to cart array', () => {
        cart.addToCart( cars[0] )
        cart.addToCart( cars[1] )
        
        expect( cart.cart.length ).toEqual( 2 )
        expect( cart.cart[0] ).toEqual( cars[0] )
        expect( cart.cart[1] ).toEqual( cars[1] )
    })
    test('addToCart() should increase total property', () => {
        cart.addToCart( cars[0] );
        cart.addToCart( cars[8] );
        cart.addToCart( cars[2] );

        expect( cart.total ).toEqual( cars[0].price + cars[8].price + cars[2].price )
    })

    // removeFromCart method
    test('removeFromCart() should remove a car from the cart array', () => {
        cart.addToCart( cars[0] )
        cart.addToCart( cars[1] )
        cart.addToCart( cars[2] )

        cart.removeFromCart( 1, cars[1].price)

        expect( cart.cart.length ).toEqual( 2 )
        expect( cart.cart[0] ).toEqual( cars[0] )
        expect( cart.cart[1] ).toEqual( cars[2] )
    })
    test('removeFromCart() should decrease the total property.', () => {
        cart.addToCart( cars[0] );
        cart.addToCart( cars[8] );
        cart.addToCart( cars[2] );
      
        cart.removeFromCart( 0, cars[0].price );
        cart.removeFromCart( 2, cars[2].price );

        expect( cart.total ).toEqual( cars[8].price )      
      });

      // checkout method
      test('checkout() should empty thee cart array and set total to 0.', () => {
        cart.addToCart( cars[0] )
        cart.addToCart( cars[1] )
        cart.addToCart( cars[2] )
        cart.addToCart( cars[3] )

        cart.checkout()

        expect( cart.cart.length ).toEqual( 0 )
        expect( cart.total ).toEqual( 0 )
      })
})