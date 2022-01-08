module.exports = ({ theme, e }) => {

    const colors = theme('colors');

    const linkColors = {};
    for (const [key, value] of Object.entries(colors)) {
        // Secondary colors are used for :hover / :active states
        if (key.indexOf('-secondary') !== -1) {
            continue;
        }


        let activeColorKey = `${key}-secondary`;
        if (!colors[activeColorKey]) {
            activeColorKey = key;
        }

        linkColors[`.${e(`link-${key}`)}`] = {
            [`@apply ${e(`text-${key}`)}`]: {},
            [`@apply ${e(`border-${key}`)}`]: {},
            '&:hover, &:active, &:focus': {
                [`@apply ${e(`text-${activeColorKey}`)}`]: {},
                [`@apply ${e(`border-${activeColorKey}`)}`]: {},
            }
        };
    }

    return {
        '.link': {
            '@apply transition-colors duration-300': {},
            '@apply cursor-pointer': {},
            '@apply border-b-2 border-graphite text-graphite': {},
            '&:active, &:focus': {
                '@apply ui-outline': {},
            }
        },
        ...linkColors,
    }
};