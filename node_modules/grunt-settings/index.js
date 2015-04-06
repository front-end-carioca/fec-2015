var fs = require("fs");
var path = require("path");

var Tools = {
    set: function(namespace, options) {
      var namespaceComponents = namespace.split(/[:.]/);
      var config = this._config;
      var component;

      while (component = namespaceComponents.shift()) {
        if (namespaceComponents.length === 0) {
          config[component] = options;
        } else {
          config[component] = config[component] || {};
        }

        config = config[component];
      }
    }

  , init: function(grunt) {
      this._grunt = grunt;
      this._grunt.initConfig(this._config);
      this._loadNpmTasks();
    }

  , registerTask: function(name, deps) {
      this._grunt.registerTask(name, deps);
    }

  , _loadNpmTasks: function() {
      var packageFile = path.join(process.cwd(), "package.json");
      var package = JSON.parse(fs.readFileSync(packageFile));

      ["dependencies", "devDependencies"].forEach(function(name){
        this._loadNpmTasksFromDependencies(package[name]);
      }, this);
    }

  , _loadNpmTasksFromDependencies: function(deps) {
      if (!deps) { return; }

      for (var packageName in deps) {
        if (packageName !== "grunt-settings" && packageName.match(/^grunt-/)) {
          this._grunt.loadNpmTasks(packageName);
        }
      }
    }

  , _config: {}
  , _grunt: null
};

module.exports = Tools;
