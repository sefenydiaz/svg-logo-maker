const Square = require('../lib/Square.js');

describe('Square', () => {
    it('should take user answers and generate a new logo', () => {
        const square = new Square('#000000', 'SYD', '#111111');
        expect(square.render()).toEqual(`
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#000000" />
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="#111111">SYD</text>
        </svg>
        `
        )
    });
});