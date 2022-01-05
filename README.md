# ui-kit

<a href="https://www.npmjs.com/package/@simplysuperb-dev/ui-kit">
    <img alt="npm (scoped)" src="https://img.shields.io/npm/v/@simplysuperb-dev/ui-kit?style=flat">
</a>
<a href="https://github.com/simplysuperb-dev/ui-kit">
    <img alt="GitHub Repo stars"
        src="https://img.shields.io/github/stars/simplysuperb-dev/ui-kit?style=flat">
</a>
<a href="https://github.com/simplysuperb-dev/ui-kit">
    <img alt="GitHub Repo stars" src="https://img.shields.io/badge/view%20on-github-blue">
</a>

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

Run TailwindCSS's watcher before modifying the css:

```
npm run css:dev
```

To preview any changes to the css use:

```
npm run start:dev
```

## Releasing new versions

To update version of this package, use [`release`](https://www.npmjs.com/package/release):

```
release <type>
```

Then use `npm` to publish the version:

```
npm publish --registry=https://npm.pkg.github.com/simplysuperb-dev # with --registry=https://registry.npmjs.org for npmjs registry
```