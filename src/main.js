const plugin = require('tailwindcss/plugin');

const colors = require('./colors');
const fontFamily = require('./fontFamily');
const fontSize = require('./fontSize');
const screens = require('./screens')

module.exports = plugin(null, {
    theme: {
        colors,
        fontFamily,
        screens,
        fontSize,
    }
})