module.exports = ({ theme, e }) => {

    const colors = theme('colors');

    const listColors = {};
    for (const [key] of Object.entries(colors)) {
        // filter out grey, default color
        if (key == 'grey') {
            continue;
        }
        listColors[`.${e(`list-${key}`)}`] = {
            '& > li': {
                '&::marker': {
                    [`@apply ${e(`text-${key}`)}`]: {},
                }
            }
        };
    }

    return {
        '.list': {
            '& li': {
                '@apply ml-8': {},
                '&::marker': {
                    '@apply text-grey': {},
                }
            },
            'ul&': {
                '@apply list-disc': {},
            },
            'ol&': {
                '@apply list-decimal': {},
            }
        },
        ...listColors,
    }
};