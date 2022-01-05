module.exports = ({ theme, e }) => {

    const colors = theme('colors');

    const listColors = {};
    for (const [key, value] of Object.entries(colors)) {
        // filter out grey, default color
        if (key == 'grey') {
            continue;
        }
        listColors[`.${e(`list-${key}`)}`] = {
            '& > li': {
                '&::marker': {
                    color: value,
                }
            }
        };
    }

    return {
        '.list': {
            '& li': {
                'margin-left': '30px',
                '&::marker': {
                    color: colors['grey'],
                }
            },
            'ul&': {
                'list-style-type': 'disc',
            },
            'ol&': {
                'list-style-type': 'counter',
            }
        },
        ...listColors,
    }
};