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

[➡️ Demo available here](https://simplysuperb-dev.github.io/ui-kit/)

## Why
I am building few applications (iOS / Android / Mobile), which share common visual elements, so I am using this kit for another package containing React components and wanted to wrap common tailwindcss utilities as components.

## Installation

Install the tailwindcss plugin:
```
npm install --save-dev @simplysuperb-dev/ui-kit
```

Then require it in your `tailwind.config.js`:

```js
//tailwind.config.js
module.exports = {
    ...
    plugins: [
        require('@simplysuperb-dev/ui-kit')
    ],
}
```

## Usage

### Colors

All defined colors are used for generating classes for styling: `.list`, `.link` and `.btn` aswell. Refer to the [source code](https://github.com/simplysuperb-dev/ui-kit/tree/main/src/components) of each of those components for their further usage.

List of colors: 

- **transparent**: transparent
- **white**: #FFFFFF
- **graphite**: #2e2e2e
- **grey**: #aaaaaa
- **green**: #98b88b
- **green-secondary**: #8ba780
- **porcelain**: #f1f3f4
- **blue**: #8b8fb8
- **blue-secondary**: #5d64a5
- **orange**: #dba475
- **orange-secondary**: #d09562
- **yellow**: #FFC634
- **red**: #cd5f5f
- **red-secondary**: #bf2a2a

### Typography

**Fonts**
- `.font-serif`: Merriweather
- `.font-sans`: Merriweather Sans

**Font Sizes**
- `.text-h1` / `.text-h2` / `.text-h3` / `.text-h4` / `.text-h5` / `.text-h6`: heading styles that should be used in combination with `.font-serif`
- `.text-subtitle` / `.text-caption` / `.text-overline`: used for adding emphasis
- `.text-base`: resetting the font size
- `.text-button`: used on `.btn` components

### Basic Components
**`.list`**
```html
  <ul class="list list-red">
    <li>home</li>
    <li>about</li>
    <li>
        social
        <ol class="list list-orange">
            <li>instagram</li>
            <li>facebook</li>
            <li>linkedin</li>
        </ul>
    </li>
</ul>
```

**`.link`**
```html
<a href="javascript: false" class="link link-green">Green link</a>
```

**`.btn`**

```html
<!-- Solid -->
 <button class="btn btn-solid btn-green">Default Green</button>

<!-- Outline -->
<button class="btn btn-outline btn-green">Default Green</button>

<!-- Link -->
<button class="btn btn-link btn-green">Default Green</button>
 ```

 ### Form components

Form components must be wrapped inside a `.form-element` div and by adding `has-error` class to that div they will be styled properly to indicate any validation errors.

Additionally you might use `.form-label` for styling `<label>` elements in forms.

 #### `.input`

 ```html
 <div class="form-element">
    <label for="textInput" class="form-label">label</label>
    <input type="text" id="textInput" placeholder="my text input..." class="form-input">
</div>
```

 #### `.select`
 ```html
<div class="form-element">
    <label for="select" class="form-label">select</label>
    <select class="form-select" id="select">
        <option>Select an option</option>
        <option>Milk</option>
        <option>Bread</option>
        <option>Butter</option>
        <option>Beef</option>
    </select>
</div>
```

 #### `.textarea`
 ```html
<div class="form-element ">
    <label for="textarea" class="form-label">
        Textarea
    </label>
    <textarea class="form-textarea" name="textarea" id="textarea" placeholder="my amazing textarea..."></textarea>
</div>
```
 #### `.radio`
 ```html
<div class="form-element">
    <span class="form-label">Are you amazing?</span>
    <div class="flex">
        <div class="inline-flex items-center">
            <input type="radio" id="yesRadio" name="amazing" class="form-radio">
            <label for="yesRadio">Yes</label>
        </div>
        <div class="inline-flex items-center ml-6">
            <input type="radio" id="heckYesRadio" name="amazing" class="form-radio">
            <label for="heckYesRadio">Heck, Yes!</label>
        </div>
    </div>
</div>
```
 #### `.checkbox`
 ```html
<div class="form-element flex-row">
    <div class="inline-flex items-center">
        <input type="checkbox" id="checkbox" name="checkbox" class="form-checkbox">
        <label for="checkbox">Yes, I accept the terms I never read</label>
    </div>
</div>
```

### Utilities

### `.ui-outline`
Beautifully styled outline that can be applied on `:hover`, `:focus` or `:active` states.

## Modifying

Run TailwindCSS's watcher before modifying the css:

```
npm run css:dev
```

To preview any changes to the css use:

```
npm run start:dev
```

Or if you have [`concurrently`](https://www.npmjs.com/package/concurrently) installed use:

```
npm run dev
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
