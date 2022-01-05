const plugin = require('tailwindcss/plugin');

const link = require('./components/link');
const list = require('./components/list');
const font = require('./font');

module.exports = plugin(function ({ addComponents, theme, e }) {
    addComponents([
        font.faces,
        link({ theme, e }),
        list({ theme, e }),
    ]);
}, {
    theme: {
        colors: {
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
            h1: ['96px', '120px'],
            h2: ['60px', '75px'],
            h3: ['48px', '60px'],
            h4: ['34px', '42px'],
            h5: ['24px', '32px'],
            h6: ['24px', '32px'],
        },
    }
})