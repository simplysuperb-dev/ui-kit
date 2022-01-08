module.exports = {
    '.form-element': {
        '@apply flex flex-col': {},
        '&.has-error': {
            '.form-input': {
                '@apply border-red': {},
            },
            label: {
                '@apply text-red': {},
            }
        },
        label: {
            '@apply mb-2': {},
        },
    }
};