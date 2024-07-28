export default class car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const { constructor } = Object.getPrototypeOf(this);
    const newCar = new constructor(this._brand, this._motor, this._color);
    return newCar;
  }
}
