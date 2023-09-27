/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  #radius;
  constructor(radius) {
    super(3.14 * radius ** 2, 2 * 3.14 * radius);
    this.#radius = radius;
  }

  describe() {
    super.describe();
    console.log(
      `The area is ${this.area}, the perimeter is ${
        this.perimeter
      }, and the radius is ${this.#radius}`
    );
  }
}

const newCircle = new Circle(4);
newCircle.describe();
