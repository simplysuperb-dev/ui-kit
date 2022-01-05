
const MerriweatherSerifFont = {
    '@font-face': [
        {
            fontFamily: 'Merriweather',
            fontStyle: 'normal',
            fontWeight: 300,
            fontDisplay: 'swap',
            src:
                'url("/src/fonts/merriweather-v28-latin_cyrillic-300.woff2") format("woff2"), url("/src/fonts/merriweather-v28-latin_cyrillic-300.woff") format("woff")'
        },
        {
            fontFamily: 'Merriweather',
            fontStyle: 'italic',
            fontWeight: 300,
            fontDisplay: 'swap',
            src:
                'url("/src/fonts/merriweather-v28-latin_cyrillic-300italic.woff2") format("woff2"), url("/src/fonts/merriweather-v28-latin_cyrillic-300italic.woff") format("woff")'
        },
        {
            fontFamily: 'Merriweather',
            fontStyle: 'normal',
            fontWeight: 400,
            fontDisplay: 'swap',
            src:
                'url("/src/fonts/merriweather-v28-latin_cyrillic-regular.woff2") format("woff2"), url("/src/fonts/merriweather-v28-latin_cyrillic-regular.woff") format("woff")'
        },
        {
            fontFamily: 'Merriweather',
            fontStyle: 'italic',
            fontWeight: 400,
            fontDisplay: 'swap',
            src:
                'url("/src/fonts/merriweather-v28-latin_cyrillic-400italic.woff2") format("woff2"), url("/src/fonts/merriweather-v28-latin_cyrillic-400italic.woff") format("woff")'
        },
        {
            fontFamily: 'Merriweather',
            fontStyle: 'normal',
            fontWeight: 700,
            fontDisplay: 'swap',
            src:
                'url("/src/fonts/merriweather-v28-latin_cyrillic-700.woff2") format("woff2"), url("/src/fonts/merriweather-v28-latin_cyrillic-700.woff") format("woff")'
        },
        {
            fontFamily: 'Merriweather',
            fontStyle: 'italic',
            fontWeight: 700,
            fontDisplay: 'swap',
            src:
                'url("/src/fonts/merriweather-v28-latin_cyrillic-700italic.woff2") format("woff2"), url("/src/fonts/merriweather-v28-latin_cyrillic-700italic.woff") format("woff")'
        },
        {
            fontFamily: 'Merriweather',
            fontStyle: 'normal',
            fontWeight: 900,
            fontDisplay: 'swap',
            src:
                'url("/src/fonts/merriweather-v28-latin_cyrillic-900.woff2") format("woff2"), url("/src/fonts/merriweather-v28-latin_cyrillic-900.woff") format("woff")'
        },
        {
            fontFamily: 'Merriweather',
            fontStyle: 'italic',
            fontWeight: 900,
            fontDisplay: 'swap',
            src:
                'url("/src/fonts/merriweather-v28-latin_cyrillic-900italic.woff2") format("woff2"), url("/src/fonts/merriweather-v28-latin_cyrillic-900italic.woff") format("woff")'
        }
    ]
};

const MerriweatherSansSerifFont = {
    '@font-face': [
        {
            fontFamily: '"Merriweather Sans"',
            fontStyle: 'normal',
            fontWeight: 300,
            fontDisplay: 'swap',
            src: 'url("/src/fonts/merriweather-sans-v14-latin_cyrillic-ext-300.woff2") format("woff2"), url("/src/fonts/merriweather-sans-v14-latin_cyrillic-ext-300.woff") format("woff")'
        },
        {
            fontFamily: '"Merriweather Sans"',
            fontStyle: 'italic',
            fontWeight: 300,
            fontDisplay: 'swap',
            src: 'url("/src/fonts/merriweather-sans-v14-latin_cyrillic-ext-300italic.woff2") format("woff2"), url("/src/fonts/merriweather-sans-v14-latin_cyrillic-ext-300italic.woff") format("woff")'
        },
        {
            fontFamily: '"Merriweather Sans"',
            fontStyle: 'normal',
            fontWeight: 400,
            fontDisplay: 'swap',
            src:
                'url("/src/fonts/merriweather-sans-v14-latin_cyrillic-ext-regular.woff2") format("woff2"), url("/src/fonts/merriweather-sans-v14-latin_cyrillic-ext-regular.woff") format("woff")'
        },
        {
            fontFamily: '"Merriweather Sans"',
            fontStyle: 'italic',
            fontWeight: 400,
            fontDisplay: 'swap',
            src:
                'url("/src/fonts/merriweather-sans-v14-latin_cyrillic-ext-italic.woff2") format("woff2"), url("/src/fonts/merriweather-sans-v14-latin_cyrillic-ext-italic.woff") format("woff")'
        },
        {
            fontFamily: '"Merriweather Sans"',
            fontStyle: 'normal',
            fontWeight: 700,
            fontDisplay: 'swap',
            src:
                'url("/src/fonts/merriweather-sans-v14-latin_cyrillic-ext-700.woff2") format("woff2"), url("/src/fonts/merriweather-sans-v14-latin_cyrillic-ext-700.woff") format("woff")'
        },
        {
            fontFamily: '"Merriweather Sans"',
            fontStyle: 'italic',
            fontWeight: 700,
            fontDisplay: 'swap',
            src:
                'url("/src/fonts/merriweather-sans-v14-latin_cyrillic-ext-700italic.woff2") format("woff2"), url("/src/fonts/merriweather-sans-v14-latin_cyrillic-ext-700italic.woff") format("woff")'
        },
        {
            fontFamily: '"Merriweather Sans"',
            fontStyle: 'normal',
            fontWeight: 800,
            fontDisplay: 'swap',
            src:
                'url("/src/fonts/merriweather-sans-v14-latin_cyrillic-ext-800.woff2") format("woff2"), url("/src/fonts/merriweather-sans-v14-latin_cyrillic-ext-800.woff") format("woff")'
        },
        {
            fontFamily: '"Merriweather Sans"',
            fontStyle: 'italic',
            fontWeight: 800,
            fontDisplay: 'swap',
            src:
                'url("/src/fonts/merriweather-sans-v14-latin_cyrillic-ext-800italic.woff2") format("woff2"), url("/src/fonts/merriweather-sans-v14-latin_cyrillic-ext-800italic.woff") format("woff")'
        }
    ]
};


let fontFamily = {
    serif: ['Merriweather', 'serif'],
    sans: ['"Merriweather Sans"', 'sans-serif'],
};


module.exports = {
    family: fontFamily,
    serif: MerriweatherSerifFont,
    sans: MerriweatherSansSerifFont,
};