const Circle = require('../lib/Circle.js');

describe('Circle', () => {
    it('should take user answers and generate a new logo', () => {
        const circle = new Circle('#000000', 'SYD', '#111111');
        expect(circle.render()).toEqual(`
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="#000000" />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="#111111">SYD</text>
        </svg>
        `
        )
    });
});