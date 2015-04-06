# grunt-settings

> Remove the boring parts of Grunt.

* Automatically load any NPM task available on  your package.json
* Dynamically define the task configuration namespace.

## Getting Started

This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-settings --save-dev
```

Check this sample configuration.

```js
var config = require("grunt-settings");

module.exports = function(grunt) {
  config.init(grunt);

  //==========================================================

  config.set("jshint.dist", {
      options: {jshintrc: true}

    , files: {
        src: ["lib/**/*.js"]
      }
  });

  //==========================================================

  config.set("copy.all", {
    files: [
        {src: "lib/cnpj.js", dest: "build/cnpj.js"}
      , {src: "lib/cpf.js", dest: "build/cpf.js"}
    ]
  });

  //==========================================================

  config.set("concat.bundle", {
      src: ["lib/cpf.js", "lib/cnpj.js"]
    , dest: "build/cpf_cnpj.js"
  });

  //==========================================================

  config.set("uglify.cnpj", {
      src: "build/cnpj.js"
    , dest: "build/cnpj.min.js"
  });

  config.set("uglify.cpf", {
      src: "build/cpf.js"
    , dest: "build/cpf.min.js"
  });

  config.set("uglify.cpf_cnpj", {
      src: "build/cpf_cnpj.js"
    , dest: "build/cpf_cnpj.min.js"
  });

  //==========================================================

  config.registerTask("default", ["jshint", "concat", "copy", "uglify"]);
};
```

## Release History

 * 2013-12-05   v0.0.1   Initial release.
 * 2013-12-05   v0.0.2   Bug fix; wasn't ignoring the correct package name.
