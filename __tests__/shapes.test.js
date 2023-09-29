//write Jest tests for the shape classes.
const Shape = require('../lib/shape');
const Rectangle = require('../lib/rectangle');
const Square = require('../lib/square');
const Circle = require('../lib/circle');

describe('Shape', () => {
  test('should have a name property', () => {
    const shape = new Shape('shape');
    expect(shape.name).toEqual('shape');
  });
});

describe('Rectangle', () => {
  test('should have a name property', () => {
    const rectangle = new Rectangle(2, 3);
    expect(rectangle.name).toEqual('rectangle');
  });
  test('should have a width and height property', () => {
    const rectangle = new Rectangle(2, 3);
    expect(rectangle.width).toEqual(2);
    expect(rectangle.height).toEqual(3);
  });
  test('should have an area function', () => {
    const rectangle = new Rectangle(2, 3);
    expect(rectangle.area()).toEqual(6);
  });
});

describe('Square', () => {
  test('should have a name property', () => {
    const square = new Square(2);
    expect(square.name).toEqual('square');
  });
  test('should have a width and height property', () => {
    const square = new Square(2);
    expect(square.width).toEqual(2);
    expect(square.height).toEqual(2);
  });
  test('should have an area function', () => {
    const square = new Square(2);
    expect(square.area()).toEqual(4);
  });
});

describe('Circle', () => {
  test('should have a name property', () => {
    const circle = new Circle(2);
    expect(circle.name).toEqual('circle');
  });
  test('should have a radius property', () => {
    const circle = new Circle(2);
    expect(circle.radius).toEqual(2);
  });
  test('should have an area function', () => {
    const circle = new Circle(2);
    expect(circle.area()).toBeCloseTo(12.566370614359172);
  });
});
