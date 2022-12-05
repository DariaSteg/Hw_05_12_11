"use strict";

// Створити клас Товар з властивостями: назва, ціна, валюта, кількість,
// і методами: повернути інформацію про товар і купити товар(метод приймає кількість одиниць товару і повертає суму).

// Створити дочірні класи Фізичний товар і Віртуальний товар, обидва походять від класу товар.
// У фізичного товара додається властивість вага.
// У віртуального товара додається властивість розмір пам'яті.

/**
 * @param {string}name
 * @param {number}price
 * @param {currency}price
 * @param {number}quantity
 * @throws {TypeError}type must be a number or bigint num
 * @throws {RangeError}type must be a positive or zero
 */
class Product {
    constructor(name, price,currency,quantity) {
      this.name = name;
      this.price = price;
      this.currency = currency;
      this.quantity = quantity;
    }
    get name() {
      return this._name;
    }
    set name(name) {
      if (typeof name !== "string") {
        throw new TypeError("Name must be string");
      }
      this._name = name;
    }
    get price() {
        return this._price;
      }
      set price(price) {
        if (typeof price !== "number") {
          throw new TypeError("from must be number");
        }
        if (price <= MIN_NUMBER ) {
          throw new RangeError("numbers must be positive");
        }
        this._price = price;
      }

      get currency() {
        return this._currency;
      }
      set currency(currency) {
        if (typeof currency !== "string") {
          throw new TypeError("currency must be string");
        }
        this._currency = currency;
      }
      get quantity() {
        return this._quantity;
      }
      set quantity(quantity) {
        if (typeof quantity!== "number") {
          throw new TypeError("from must be number");
        }
        if (quantity <= MIN_NUMBER ) {
          throw new RangeError("numbers must be positive");
        }
        this._quantity = quantity;
      }

    allInfo() {   
       return `
       ${this.name} 
       ${this.price}
       ${this.currency}
       ${this.quantity}`
      }

    buyProduct (volume) {
        return this.price* volume;
    }
}


class Physicalproduct extends Product{
    constructor(name, price,currency,quantity,weight){
      super(name, price,currency,quantity);
      this.weight = weight;
    }
    set weight (weight ) {
        if (typeof weight !== "number") {
          throw new TypeError("from must be number");
        }
        if (weight  <= MIN_NUMBER ) {
          throw new RangeError("numbers must be positive");
        }
        this._weight  = weight ;
      }
}
class Virtualproduct extends Product{
    constructor(name, price,currency,quantity,weight,memorySize){
      super(name, price,currency,quantity,weight);
      this.memorySize = memorySize;
    }
    set weight (weight ) {
        if (typeof weight !== "number") {
          throw new TypeError("from must be number");
        }
        if (weight  <= MIN_NUMBER ) {
          throw new RangeError("numbers must be positive");
        }
        this._weight  = weight ;
      }
}



  try {
    const product = new Product('T-shirt',35,'$',56);
    const product2 = new Physicalproduct ('T-shirt',35,'$',56,34);
    const product3 = new Virtualproduct ('T-shirt',35,'$',56,34,7);
    console.log(product.allInfo());
    console.log(product.buyProduct(4));
    console.log(product2);
    console.log(product3);
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Wrong type");
    }
    if (error instanceof RangeError) {
      console.log("Wrong value");
    }
    console.log(error);
  }