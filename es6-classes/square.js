/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */

class Square extends Shape {
  constructor(width) {
    super(width * width, width * 4);
    this.width = width;
  }

  describe() {
    super.describe();
    return `${super.describe()} and the width is ${this.width}`;
  }
}

const newSquare = new Square(4);
console.log(newSquare.describe());
