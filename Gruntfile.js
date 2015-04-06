module.exports = function(grunt) {

	grunt.initConfig({
		connect :  {
			server : {
				options : {
					hostname : 'localhost',
					port: 9292,
					keepalive: true,
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
		watch: {
			gruntfile: {
				files: ['Gruntfile.js']
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
			html: {
				files: ['public/*.html'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.registerTask('default', function(){
		grunt.task.run(['watch']);
	});

	grunt.registerTask('server', function(name){
		grunt.task.run(['connect:server']);
		grunt.log.ok('Opening Application: FRONT END CARIOCA - 2015');
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

};