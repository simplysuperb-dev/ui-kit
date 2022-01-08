const tinyColor = require('tinycolor2')

module.exports = ({ theme }) => {

    const colors = theme('colors');


    return {
        '.ui-outline': {
            '@apply outline-1 outline-offset-2 outline-dotted': {},
            'outline-color': tinyColor(colors.green).setAlpha(0.5).toString(),
        },
    }
};