/**
 * Programming Paradigm: Object-Oriented Programming
 * Problem: Create a factory that can create a product.
 * Solution:
 * 1. Create a factory class that can create a product.
 * 2. Create a product(s) class that will be created by the factory.
 * 3. Create a factory method that will create a product.
 */

class Vehicle {
  constructor({ type, wheels, color, doors, year, price }) {
    this.type = type;
    this.wheels = wheels;
    this.color = color;
    this.doors = doors;
    this.year = year;
    this.price = price;
  }

  getType() {
    return this.type;
  }

  getWheels() {
    return this.wheels;
  }

  getColor() {
    return this.color;
  }

  getDoors() {
    return this.doors;
  }

  getYear() {
    return this.year;
  }

  getPrice() {
    return this.price;
  }

  drive() {
    return "Driving";
  }

  stop() {
    return "Stopping";
  }

  turn() {
    return "Turning";
  }

  park() {
    return "Parking";
  }

  getInfo() {
    return `${this.type} ${this.color} ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor() {
    super({
      type: "car",
      wheels: 4,
      color: "red",
      doors: 4,
      year: "2020",
      price: "$100k",
    });
  }

  openTrunk() {
    return "Opening trunk";
  }

  closeTrunk() {
    return "Closing trunk";
  }

  openHood() {
    return "Opening hood";
  }

  closeHood() {
    return "Closing hood";
  }

  openWindows() {
    return "Opening windows";
  }

  closeWindows() {
    return "Closing windows";
  }
}

class Truck extends Vehicle {
  constructor() {
    super({
      type: "truck",
      wheels: 6,
      color: "blue",
      doors: 2,
      year: "2020",
      price: "$200k",
    });
  }

  openWindows() {
    return "Opening windows";
  }

  closeWindows() {
    return "Closing windows";
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super({
      type: "motorcycle",
      wheels: 2,
      color: "green",
      doors: 0,
      year: "2020",
      price: "$50k",
    });
  }

  putOnStand() {
    return "Putting on stand";
  }
}

/**
 * Vehicle Factory Method.
 * Creates a new vehicle based on the type
 *
 * @param {string} type
 * @returns {Vehicle}
 */
class VehicleFactory {
  // Creates a new car
  createCar() {
    return new Car();
  }

  // Creates a new truck
  createTruck() {
    return new Truck();
  }

  // Creates a new motorcycle
  createMotorcycle() {
    return new Motorcycle();
  }
}

// Create a new vehicle factory
const factory = new VehicleFactory();

// Create a new car
const car = factory.createCar();

// Create a new truck
const truck = factory.createTruck();

// Create a new motorcycle
const motorcycle = factory.createMotorcycle();
