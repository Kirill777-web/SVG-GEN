const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Rectangle, Square } = require('./lib'); // Adjusted the path

class SVG {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }

  render() {
    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.shapeElement}
    ${this.textElement}
    </svg>`;
  }

  setTextElement(text, color) {
    const fontSize = 50; // adjust as needed
    const x = 100; // center of the SVG
    const y = 100; // center of the SVG
    this.textElement = `<text x="${x}" y="${y}" font-size="${fontSize}" text-anchor="middle" alignment-baseline="middle" fill="${color}">${text}</text>`;
  }

  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to 3 characters:',
    validate: (input) =>
      input.length <= 3 || 'Text should be up to 3 characters!',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color or hexadecimal number:',
  },
  {
    type: 'list',
    name: 'shapeType',
    message: 'Choose a shape:',
    choices: ['Circle', 'Rectangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color or hexadecimal number:',
  },
];

inquirer.prompt(questions).then((answers) => {
  const { text, textColor, shapeType, shapeColor } = answers;
  const svg = new SVG();
  svg.setTextElement(text, textColor);

  switch (shapeType) {
    case 'Circle':
      svg.setShapeElement(new Circle(100, shapeColor));
      break;
    case 'Rectangle':
      svg.setShapeElement(new Rectangle(200, 100, shapeColor));
      break;
    case 'Square':
      svg.setShapeElement(new Square(100, shapeColor));
      break;
  }

  fs.writeFile('logo.svg', svg.render(), (err) => {
    if (err) {
      console.error('Error saving the file:', err);
      return;
    }
    console.log('Generated logo.svg');
  });
});
