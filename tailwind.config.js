module.exports = {
    mode: 'jit',
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            desktop: '960px',
        },
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
        fontSize: {
            overline: ['10px', '12px'],
            caption: ['12px', '16px'],
            base: ['14px', '22px'],
            subtitle: ['16px', '20px'],
            h1: ['96px', '120px'],
            h2: ['60px', '75px'],
            h3: ['48px', '60px'],
            h4: ['34px', '42px'],
            h5: ['24px', '32px'],
            h6: ['24px', '32px'],
        },
        fontFamily: {
            merriweather: 'Merriweather, serif'
        }
    },
    plugins: [],
}