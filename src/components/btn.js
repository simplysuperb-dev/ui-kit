module.exports = ({ theme, e }) => {
    const colors = theme('colors');

    const btnColors = {};
    for (const [key, value] of Object.entries(colors)) {
        // Secondary colors are used for :hover / :active states
        if (key.indexOf('-secondary') !== -1) {
            continue;
        }


        let activeColorKey = `${key}-secondary`;
        if (!colors[activeColorKey]) {
            activeColorKey = key;
        }

        btnColors[`.${e(`btn-${key}`)}`] = {
            [`@apply ${e(`text-${key}`)}`]: {},
            [`@apply ${e(`border-${key}`)}`]: {},
            [`@apply ${e(`bg-${key}`)}`]: {},
            '&:hover, &:active, &:focus': {
                [`@apply ${e(`text-${activeColorKey}`)}`]: {},
                [`@apply ${e(`border-${activeColorKey}`)}`]: {},
                [`@apply ${e(`bg-${activeColorKey}`)}`]: {},
            }
        };
    }


    return {
        '.btn': {
            '@apply text-button': {},
            '@apply px-4 py-2': {},
            '@apply bg-transparent': {},
            '@apply border-2 border-transparent': {},
            'background-color': 'transparent',
            '&:hover, &:active, &:focus': {
                '@apply ui-outline': {},
                '@apply bg-transparent': {},
                '@apply border-2 border-transparent': {},
            }
        },
        ...btnColors,
        '.btn-outline': {
            '@apply bg-transparent': {},
            '&:hover, &:active, &:focus': {
                '@apply text-white': {},
            }
        },
        '.btn-solid': {
            '@apply text-white': {},
            '&:hover, &:active, &:focus': {
                '@apply text-white': {},
            }
        },
        '.btn-link': {
            '@apply bg-transparent': {},
            '@apply border-2 border-transparent': {},
            '&:hover, &:active, &:focus': {
                '@apply bg-porcelain': {},
                '@apply border-2 border-porcelain': {},
            }
        }
    }
};