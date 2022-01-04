const uiKit = require('./src/main');
console.log(uiKit);
module.exports = {
    mode: 'jit',
    content: ["./dist/**/*.{html,js}"],
    plugins: [
        uiKit
    ],
}