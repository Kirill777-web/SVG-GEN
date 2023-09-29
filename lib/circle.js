const Shape = require('./shape');

class Circle extends Shape {
  constructor(radius, color) {
    super('circle');
    this.radius = radius;
    this.color = color;
  }
  render() {
    const cx = 100; // half of the SVG width
    const cy = 100; // half of the SVG height
    return `<circle cx="${cx}" cy="${cy}" r="${this.radius}" fill="${this.color}"/>`;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

module.exports = Circle;
