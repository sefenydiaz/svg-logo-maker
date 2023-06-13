const Circle = require('./Circle.js');
const Square = require('./Square.js');
const Triangle = require('./Triangle.js');

function generate(response) {
    if (response.shape === 'Circle') {
        let logo = new Circle(response.shapeColor, response.text, response.textColor)
        return logo.render()
    }
    if (response.shape === 'Square') {
        let logo = new Square(response.shapeColor, response.text, response.textColor)
        return logo.render()
    }
    if (response.shape === 'Triangle') {
        let logo = new Triangle(response.shapeColor, response.text, response.textColor)
        return logo.render()
    }
};

module.exports = generate;