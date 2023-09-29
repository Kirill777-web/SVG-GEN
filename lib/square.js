//square class

const Rectangle = require('./rectangle');
class Square extends Rectangle {
  constructor(side, color) {
    super(side, side, color);
    this.name = 'square';
  }

  render() {
    const x = 100 - this.width / 2; // center of the SVG, adjusted for width
    const y = 100 - this.height / 2; // center of the SVG, adjusted for height
    return `<rect x="${x}" y="${y}" width="${this.width}" height="${this.height}" fill="${this.color}"/>`;
  }
}

module.exports = Square;
