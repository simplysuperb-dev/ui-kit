# ui-kit
TailwindCSS powered UI kit following simply superb.'s design system.

## Available Styles

You can find all currently available styles at https://simplysuperb-dev.github.io/ui-kit/

## Installation

Install the tailwindcss plugin:
```
npm install --save-dev @simplysuperb/ui-kit
```

Then require it in your `tailwind.config.js`:

```js
//tailwind.config.js
module.exports = {
    ...
    plugins: [
        require('@simplysuperb/ui-kit')
    ],
}
```


## Modifying

Run:

```
npx tailwindcss -i src/style.css -o docs/style.css --watch
```

and use `/dist/style.css` in your HTML file:

```html 
<link rel="stylesheet" type="text/css" href="/dist/styles.css">
```