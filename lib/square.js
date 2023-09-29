//square class
const Rectangle = require('./rectangle');

class Square extends Rectangle {
  constructor(side, color) {
    super(side, side, color); // Square is a special case of Rectangle where width and height are equal
    this.name = 'square';
  }

  render() {
    const x = 0; // calculated as explained above
    const y = 0; // calculated as explained above
    return `<rect x="${x}" y="${y}" width="${this.width}" height="${this.height}" fill="${this.color}"/>`;
  }
}

module.exports = Square;
