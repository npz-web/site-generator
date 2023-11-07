module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("src");
    eleventyConfig.addWatchTarget("./src/");
  
    
    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "docs",
        includes: "_includes",
      }
    }
  };