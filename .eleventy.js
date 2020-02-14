const strftime = require("strftime");

module.exports = eleventyConfig => {
  // Usage: `{{ page.date | date("%Y/%m/") }}`
  eleventyConfig.addFilter("date", (date = new Date(), format = "%D") =>
    strftime(format, date)
  );

  eleventyConfig.addPairedShortcode(
    "output",
    content => `{# Output: ${content.trim()} #}`
  );

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
