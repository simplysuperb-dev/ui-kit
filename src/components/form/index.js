module.exports = {
    '.form-element': {
        '@apply font-sans': {},
        '@apply flex flex-col': {},
        '&.has-error': {
            '.form-input': {
                '@apply border-red': {},
            },
            '.form-label': {
                '@apply text-red': {},
            }
        },
        '.form-label': {
            '@apply font-serif font-bold': {},
            '@apply mb-2': {},
        },
    }
};