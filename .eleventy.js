module.exports = function (eleventyConfig) {
  // Add a filter using the Config API
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addFilter('myFilter', function () {});
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addWatchTarget('./src/sass/');

  // You can return your Config object (optional).
  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'public',
      include: 'includes',
    },
  };
};
