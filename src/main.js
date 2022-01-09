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
            overline: ['10px', '14px'],
            caption: ['12px', '18px'],
            base: ['14px', '24px'],
            subtitle: ['16px', '22px'],
            button: ['16px', '22px'],
            h1: ['96px', '120px'],
            h2: ['60px', '75px'],
            h3: ['48px', '60px'],
            h4: ['34px', '42px'],
            h5: ['24px', '32px'],
            h6: ['24px', '32px'],
        },
    }
})