module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("src");
    
    // Return your Object options:


    return {
      dir: {
        input: "src",
        output: "docs"
      }
    }
  };