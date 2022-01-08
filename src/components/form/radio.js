const svgToDataUri = require('mini-svg-data-uri');
module.exports = module.exports = ({ theme }) => {
    const greenColor = theme('colors.green');
    return {
        '.form-radio': {
            appearance: 'none',
            '@apply w-5 h-5 rounded-full mr-2': {},
            '@apply bg-white border-green border-2': {},
            '&:checked': {
                'background-image': `url("${svgToDataUri(
                    `<svg viewBox="0 0 16 16" fill="${greenColor}" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="4"/></svg>`
                )}")`
            }
        },
    };
}