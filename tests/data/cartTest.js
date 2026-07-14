import { addToCart,cart,loadFromStorage,saveToStorage,removeFromCart } from "../../data/cart.js";

// describe('test suit: addToCart',() => {
//   beforeEach(() =>{
//     spyOn(localStorage,'setItem');
// });
//   it('adds an existing product to the cart',() => {
//     spyOn(localStorage,'getItem').and.callFake(() => {
//       return JSON.stringify([{
//         productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//         quantity : 1,
//         deliveryOptionId : '1'
//       }]);
//     });
//     loadFromStorage();

//     addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
//     expect(cart.length).toEqual(1);
//     expect(localStorage.setItem).toHaveBeenCalledTimes(1);
//     expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
//     expect(cart[0].quantity).toEqual(2);
//     expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
//         productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//         quantity : 2,
//         deliveryOptionId : '1'
//       }]));
//   });

//   it('adds a new product to the cart',() => {
//     spyOn(localStorage,'getItem').and.callFake(() => {
//       return JSON.stringify([]);
//     });
//     loadFromStorage();

//     addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
//     expect(cart.length).toEqual(1);
//     expect(localStorage.setItem).toHaveBeenCalledTimes(1);
//     expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
//     expect(cart[0].quantity).toEqual(1);
//     expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
//         productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//         quantity : 1,
//         deliveryOptionId : '1'
//       }]));
//   });
// });

describe('test suit:removeFromCart',() => {
  beforeEach(() => {
    spyOn(localStorage,'setItem');
  });
    it('remove a productId that is in the Cart',() => {
      spyOn(localStorage,'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId :productId1,
        quantity : 2,
        deliveryOptionId : '1'
        },{
        productId :productId2,
        quantity : 1,
        deliveryOptionId : '2'
        }]);
    });
    });
    it('remove a productId that is not the cart',() => {
      spyOn(localStorage,'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    });
});

