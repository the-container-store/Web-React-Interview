# Sass

## Modules

In order to combat selector conflicts, it is recommended to use CSS Modules. This is a way to import style declarations as JavaScript objects. To use CSS Modules, first name your styles with the convention `[file-name].module.(s)css` (e.g. `MyComponent.module.scss`).

To use your styles:

```scss
// MyComponent.module.scss
.componentWrapper {
  margin: 4em;
}
```

```js
// MyComponent.js
import styles from './MyComponent.module.scss';

function MyComponent() {
  return <div className={styles.componentWrapper}>Hello</div>;
}
```

Because we access selectors with a dot accessor, it's generally easier to name your selectors with camelcase names. This, of course, is not the conventional way to name class selectors. You may also use kebab case, but you will need to use the square bracket notation to access your styles:

```scss
// MyComponent/MyComponent.module.scss
.component-wrapper {
  margin: 4em;
}
```

```js
// MyComponent/index.js
import styles from './MyComponent.module.scss';

function MyComponent() {
  return <div className={styles.['component-wrapper']}>Hello</div>
}
```

Also, as a convention, make sure to name your style file after the component that consumes it (`MyComponent.module.scss` instead of, say, `styles.module.scss`). Create React App configures the generated class names to include the name of the style file. This helps tremendously when debugging styles.

Learn more about CSS Modules, including how to compose styles and set global styles, on [their GitHub page](https://github.com/css-modules/css-modules).

## `fonts.scss`

This file defines the app fonts. The URLs are relative. You should only include this file once per app, typically in the root App file.

```js
// top of MyGlobalAppComponent/index.js
import 'sass/fonts.scss';
```

## `reset.scss`

This file is an HTML reset. Really only intended for use in full page SPAs. Otherwise you will see conflicts with page CSS.

```js
// top of MyGlobalAppComponent/index.js
import 'sass/reset.scss';
```

## `utilities.scss`

The utility mixin names are based on the TailwindCSS library: https://tailwindcss.com/docs/what-is-tailwind/, with modifications where appropriate. The purpose behind the naming is to first optimize the amount of information needed and second abstract away explicit values so that they can change underneath without changing the name's meaning.

An example of an explicit value would be naming a class/mixin margin-30 for a style that adds a margin of 30px. If all 30px margins were changed one day to 32px, you would either have to change each and every occurrence of 30 to 32, or you would have to live with the incongruence of the name and the value. A similar example would be changing all pixel values to `rem`s or `em`s. The explicit value would lose all meaning.

### Usage

In a component's SCSS file, first import the utility Sass:

```scss
// MyComponent/MyComponent.module.scss
@import 'sass/utilities.scss';
```

Then, inside your target class, include the appropriate style mixins:

```scss
// MyComponent/MyComponent.module.scss
.myComponent {
  @include px-3; // padding on the x-axis (left and right) of 3 * space (30px)
  @include py-1; // padding on the y-axis (top and bottom) of 1 * space (10px)

  @include tablet-and-up {
    @include px-6; // padding on the x-axis (left and right) of 6 * space (60px)
    @include py-2; // padding on the y-axis (top and bottom) of 2 * space (20px)
  }
}
```

Make sure you import the styles into the component's path:

```js
// MyComponent/index.js
import styles from './MyComponent.module.scss';
```

Finally, add your class to your component:

```js
// MyComponent/index.js
export default function MyComponent {
  return (
    <div className={styles.myComponent}>
      ...
    </div>
  )
}
```

### Access Sass variables

`utilities.scss` exports certain variables using Webpack's `:export {}` convention. Add to this map if you wish to expose a Sass variable to the app. To use, simply import the variable like you would any other JavaScript module:

```js
// top of MyComponent/index.js
import { grey02 } from 'sass/utilities.scss';

// alternatively
import * as sassVars from 'sass/utilities.scss';

const defaultColor = sassVars.grey02;
```

To learn more, read [this informative article](https://til.hashrocket.com/posts/sxbrscjuqu-share-scss-variables-with-javascript).

### Docs

Coming soon(?). For now, refer to `src/sass/utilities/` for a list of all utility modules.
