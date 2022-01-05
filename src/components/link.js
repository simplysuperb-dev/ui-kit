module.exports = ({ theme, e }) => {

    const colors = theme('colors');

    const linkColors = {};
    for (const [key, value] of Object.entries(colors)) {
        // filter out graphite, default color
        if (key == 'graphite') {
            continue;
        }
        linkColors[`.${e(`link-${key}`)}`] = {
            color: value,
            'border-color': value,
            '&:hover': {
                color: value,
                'border-color': value,
            }
        };
    }

    return {
        '.link': {
            transitionProperty: 'color',
            transitionDuration: '200ms',
            cursor: 'pointer',
            color: colors.graphite,
            'border-bottom': '2px solid ' + colors.graphite,
            '&:hover': {
                color: '#000',
                'border-color': '#000',
            },
        },
        ...linkColors,
    }
};