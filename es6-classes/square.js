/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  #width;
  constructor(width) {
    super(width * width, width * 4);
    this.#width = width;
  }

  describe() {
    super.describe();
    console.log(
      `The shapes area is ${this.area}, the perimeter is ${
        this.perimeter
      }, and the width is ${this.#width}`
    );
  }
}

const newSquare = new Square(4);
newSquare.describe();
