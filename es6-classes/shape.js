/* exported Shape */
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `The area is ${this.area} and the perimeter is ${this.perimeter}`;
  }
}
const newShape = new Shape(4, 5);

console.log(newShape.describe());
