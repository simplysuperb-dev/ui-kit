const svgToDataUri = require('mini-svg-data-uri');
module.exports = module.exports = ({ theme }) => {
    const greenColor = theme('colors.green');
    return {
        '.form-checkbox': {
            appearance: 'none',
            '@apply w-5 h-5 mr-2': {},
            '@apply bg-white border-green border-2': {},
            '&:checked': {
                'background-image': `url("${svgToDataUri(
                    `<svg viewBox="0 0 16 16" fill="${greenColor}" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`
                )}")`
            }
        },
    };
}