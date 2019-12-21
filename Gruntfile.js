module.exports = function(grunt) {

grunt.initConfig({
    concat: {
        js: {
            src: ['assets/js/*.js'],
            dest: 'build/scripts.js'
        },
        css: {
            src: ['assets/css/*.css'],
            dest: 'build/style.css'
        }
    },
        uglify: {
            build: {
                files: [{
                    src: 'build/scripts.js',
                    dest: 'build/scripts.js'
                }]
            }
        }
})
    grunt.loadNpmTasks("grunt-contrib-concat");//npm i grunt-contrib-concat
    grunt.loadNpmTasks('grunt-contrib-uglify');//npm i grunt-contrib-uglify
    grunt.registerTask('default', ['concat', 'uglify']);

};
