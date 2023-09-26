/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  #radius;
  constructor(area, perimeter, radius) {
    super(area, perimeter);
    this.#radius = radius;
  }

  describe() {
    return `The area is ${this.area}, the perimeter is ${
      this.perimeter
    } and the radius is ${this.#radius}`;
  }
}

const newCircle = new Circle(4, 5, 3.17);
console.log(newCircle.describe());
