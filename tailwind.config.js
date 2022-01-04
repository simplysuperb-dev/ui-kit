const uiKit = require('./src/main');

module.exports = {
    mode: 'jit',
    content: ["./dist/**/*.{html,js}"],
    plugins: [
        uiKit
    ],
}