class Car {
  constructor(brand) {
    this.brand = brand;
  }

  present = () => {
    return `I have an ${this.brand}`;
  };
}

class Product {
  static present = (product) => {
    return `I have this ${Product}`;
  };
}

const newCar = new Car("apple");
console.log(newCar.present);
