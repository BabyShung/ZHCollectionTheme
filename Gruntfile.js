module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            js: {
                src: ['assets/js/jquery-2.2.1.min.js', 'assets/js/jquery-easyframe.js', 'assets/js/script_dev.js'],
                dest: 'assets/js/script.js',
            },
            css: {
                src: ['assets/css/hover-min.css', 'assets/css/customized-animate.css', 'assets/css/babyshung.css', 'assets/css/nth-everything.css'],
                dest: 'assets/css/styles.css',
            },
        },
        watch: {
            js: {
                files: ['**/*.js'],
                tasks: ['concat:js'],
            },
            css: {
                files: ['**/*.css'],
                tasks: ['concat:css'],
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['concat', 'watch'])
};