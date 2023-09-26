/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  #width;
  constructor(area, perimeter, width) {
    super(area, perimeter);
    this.#width = width;
  }

  describe() {
    return `The shapes area is ${this.area} the perimeter is ${
      this.perimeter
    } and the width is ${this.#width}`;
  }
}

const newSquare = new Square(4, 4, 44);
console.log(newSquare.describe());
