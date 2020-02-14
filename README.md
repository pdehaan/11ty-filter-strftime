# 11ty-filter-strftime

Recreating the Liquid `date` filter in Nunjucks using the [**strftime**](http://npm.im/strftime) library.

## HOW

```js
const strftime = require("strftime");

module.exports = eleventyConfig => {
  // Usage: `{{ page.date | date("%Y/%m/") }}`
  eleventyConfig.addFilter("date", (date = new Date(), format = "%D") =>
    strftime(format, date)
  );
  // ...
};
```

Not as full featured, but a rough implementation of [**liquidjs**'s `date` filter](https://github.com/harttle/liquidjs/blob/66541a62fde5edb60866b88982e4e529498a7399/src/builtin/filters/date.ts).

## USAGE

After defining the custom filter in your .eleventy.js config file (and installing the **strftime** dependency), you can use the filter in your Nunjucks files using the following:

```njk
{{ page.date | date("%Y/%m/") }}
```

More examples in [src/index.njk](src/index.njk).
