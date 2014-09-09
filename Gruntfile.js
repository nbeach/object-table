module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        distFolder:'dist/',

        clean: {
            dist: ['<%= distFolder %>']
        },

        html2js: {
            dist: {
                options: {
                    base: 'src',
                    module: 'ngResourceTableTemplates'
                    // add angular dependency on `widget.templates`
                },
                src: [ 'src/views/*.html' ],
                dest: 'tmp/<%= pkg.name %>.templates.js'
                // include tmp/*.templates.js as URL or in concatenate step
            }
        },

        concat: {
            options: {
                separator: "\r\n\r\n"
            },
            dist: {
                src: [
                    'tmp/**/*.js',
                    'src/**/*.js'
                ],
                dest: '<%= distFolder %>/<%= pkg.name %>.js'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                sourceMap: '<%= distFolder %>/<%= pkg.name %>.map'
            },
            dist: {
               files: {'<%= distFolder %>/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']}
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,        // Enable dynamic expansion.
                    cwd: 'src/views',  // Src matches are relative to this path.
                    src: ['**/*.html'],
                    dest: '<%= distFolder %>',
                    ext:'.html'
                }]
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('build', ['clean:dist', 'html2js:dist', 'concat:dist', 'uglify:dist', 'htmlmin:dist']);
    grunt.registerTask('default', ['build']);
};