const Triangle = require('../lib/Triangle.js');

describe('Triangle', () => {
    it('should take user answers and generate a new logo', () => {
        const triangle = new Triangle('#000000', 'SYD', '#111111');
        expect(triangle.render()).toEqual(`
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="#000000" />
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="#111111">SYD</text>
        </svg>
        `
        )
    });
});