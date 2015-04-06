var config = require('grunt-settings');

module.exports = function(grunt) {
	config.init(grunt);

	// var jsFiles = [
	// 	'vendor/assets/jquery/dist/jquery.js',
	// 	'assets/javascripts/**/*.js'
	// ];

	config.set('connect', {
		server : {
			options : {
				hostname : 'localhost',
				port: 2222,
				keepalive: true,
				open: true,
				base: 'public/'
			}
		}     
		
	});

	config.registerTask('server', function(name){
		grunt.log.ok('Success!');
		grunt.log.header('Front End Carioca 2015 o//')
		grunt.task.run(['connect']);
	});

};