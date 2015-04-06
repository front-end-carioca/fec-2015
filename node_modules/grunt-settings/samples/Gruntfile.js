var config = require("../index");

module.exports = function(grunt) {
  config.init(grunt);

  config.set("concat:dev", {
      src: ["src/a.js", "src/b.js"]
    , dest: "dist/output.js"
  });

  config.registerTask("default", "concat:dev");
};
