const plugin = require('tailwindcss/plugin');

const font = require('./font');

const link = require('./components/link');
const list = require('./components/list');
const btn = require('./components/btn');

const forms = require('./components/form');
const input = require('./components/form/input');
const select = require('./components/form/select');
const radio = require('./components/form/radio');
const checkbox = require('./components/form/checkbox');

const outline = require('./utilities/outline');
const textarea = require('./components/form/textarea');

module.exports = plugin(function ({ addUtilities, addComponents, theme, e }) {

    addUtilities([
        outline({ theme })
    ]);

    addComponents([
        // Registering fonts
        font.faces,


        // Basic Components
        link({ theme, e }),
        list({ theme, e }),
        btn({ theme, e }),

        // Complex Components
        // Forms
        forms,
        input,
        select,
        textarea,
        radio({ theme }),
        checkbox({ theme }),
    ]);
}, {
    theme: {
        colors: {
            transparent: 'transparent',
            white: '#FFFFFF',
            graphite: '#2e2e2e',
            grey: '#aaaaaa',
            green: '#98b88b',
            'green-secondary': '#8ba780',
            porcelain: '#f1f3f4',
            blue: '#8b8fb8',
            'blue-secondary': '#5d64a5',
            orange: '#dba475',
            'orange-secondary': '#d09562',
            yellow: '#FFC634',
            red: '#cd5f5f',
            'red-secondary': '#bf2a2a',
        },
        fontFamily: font.family,
        screens: {
            desktop: '960px',
        },
        fontSize: {
            overline: ['0.625rem', '0.875rem'],
            caption: ['0.75rem', '1.125rem'],
            base: ['1rem', '1.714rem'],
            subtitle: ['1.143rem', '1.571rem'],
            button: ['1.143rem', '1.571rem'],
            h1: ['5.857rem', '7.571rem'],
            h2: ['4.286rem', '5.357rem'],
            h3: ['3.429rem', '4.286rem'],
            h4: ['2.429rem', '3rem'],
            h5: ['1.714rem', '2.286rem'],
            h6: ['1.714rem', '2.286rem'],
        },
    }
})