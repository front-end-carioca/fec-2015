module.exports = function(grunt) {

	var jsFiles = [
	    'vendor/assets/jquery/dist/jquery.js',
	    'vendor/assets/jquery.stellar/jquery.stellar.min.js',
	    'vendor/assets/parallax/parallax.min.js',
	    'development/assets/**/*.js'
	];

	grunt.initConfig({
		connect :  {
			server : {
				options : {
					hostname : 'localhost',
					port: 8080,
					open: true,
					base: 'public/'
				}
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded',
					sourcemap: 'none'
				},
				files: {
					'development/assets/style/normalize.scss': 'vendor/assets/foundation/scss/normalize.scss',
					'development/assets/style/grid.scss': 'vendor/assets/foundation/scss/foundation.scss',
					'public/assets/style/main.css': 'development/assets/style/include.sass'
				}
			}
		},
		jade: {
			compile: {
				options: {
					data: {
						debug: false
					}
				},
				files: {
					"public/index.html": ["development/index.jade"]
				}
			}
		},
		uglify: {
			options: {
				mangle: {
					except: ['jQuery']
				}
			},
			my_target: {
				files: {
					'public/assets/js/main.min.js': ['public/assets/js/main.js']
				}
			}
		},
		concat: {
			dist: {
		      src: jsFiles,
		      dest: 'public/assets/js/main.js',
		    }
		},
		watch: {
			gruntfile: {
				files: ['Gruntfile.js']
			},
			jade: {
				files: ['development/**/*.jade', 'development/*.jade'],
				tasks: ['jade']
			},
			sass: {
				files: ['development/assets/style/*.sass'],
				tasks: ['sass']
			},
			css: {
				files: ['public/assets/style/*.css'],
				options: {
					livereload: true
				}
			},
			concat: {
				files: jsFiles,
				tasks: ['concat']
			},
			uglify: {
				files: ['public/assets/js/main.js'],
				tasks: ['uglify'],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['public/*.html'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.registerTask('default', function(){
		grunt.task.run(['connect','watch']);
	});

	grunt.registerTask('server', function(name){
		grunt.task.run(['connect:server']);
		grunt.log.ok('Opening Application: FRONT END CARIOCA - 2015');
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
};
