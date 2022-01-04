const uiKit = require('./src/main');

module.exports = {
    mode: 'jit',
    content: ["./docs/**/*.{html,js}"],
    plugins: [
        uiKit
    ],
}