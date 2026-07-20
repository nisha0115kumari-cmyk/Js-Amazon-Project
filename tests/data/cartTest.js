import { addToCart,cart,loadFromStorage,saveToStorage,removeFromCart,updateDeliveryOption } from "../../data/cart.js";

describe('test suit: addToCart',() => {
  beforeEach(() =>{
    spyOn(localStorage,'setItem');
});
  it('adds an existing product to the cart',() => {
    spyOn(localStorage,'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity : 1,
        deliveryOptionId : '1'
      }]);
    });
    loadFromStorage();

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity : 2,
        deliveryOptionId : '1'
      }]));
  });

  it('adds a new product to the cart',() => {
    spyOn(localStorage,'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    loadFromStorage();

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity : 1,
        deliveryOptionId : '1'
      }]));
  });
});

describe('test suit:removeFromCart',() => {
  beforeEach(() => {
    spyOn(localStorage,'setItem');
  });
    it('remove a productId that is in the Cart',() => {
      spyOn(localStorage,'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity : 1,
        deliveryOptionId : '1'
        }]);
    });
    loadFromStorage();
    removeFromCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(0);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([]));
    });

    it('remove a productId that is not the cart',() => {
      spyOn(localStorage,'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });
    loadFromStorage();
    removeFromCart('does-not-exist');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]));
    });
});

describe('test suit : updateDeliveryOption',() => {
  beforeEach(() => {
    spyOn(localStorage,'setItem')
  });
  it('update the delivery option of a product in the cart.',() => {
    spyOn(localStorage,'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity : 1,
        deliveryOptionId : '1'
        }]);
    });
    loadFromStorage();
    updateDeliveryOption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6','3');
    expect(cart.length).toEqual(1);
    expect(cart[0].deliveryOptionId).toEqual('3');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
        productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity : 1,
        deliveryOptionId : '3'
        }]));
});

it('update the delivery option of product that is not in the cart',() => {
      spyOn(localStorage,'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity : 1,
        deliveryOptionId : '1'
        }]);
    });
    loadFromStorage();
    updateDeliveryOption("54e0eccd-8f36-462b-b68a-8182611d9add",'3');
    expect(cart.length).toEqual(1);
    expect(cart[0].deliveryOptionId).toEqual('1');
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });
  it('deliveryoption does not exist',() => {
     spyOn(localStorage,'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity : 1,
        deliveryOptionId : '1'
        }]);
    });
    loadFromStorage();
    updateDeliveryOption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6','4');
    expect(cart.length).toEqual(1);
    expect(cart[0].deliveryOptionId).toEqual('1');
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });
});