module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        distFolder:'dist/',
        tempFolder: 'tmp/',

        clean: {
            dist: ['<%= distFolder %>', '<%= tempFolder %>']
        },

        html2js: {
            dist: {
                options: {
                    base: 'src',
                    module: 'objectTable',
                    htmlmin: {
                        collapseWhitespace: true,
                        removeComments: true

                    }
                },
                src: [ 'src/views/*.html' ],
                dest: 'tmp/<%= pkg.name %>.templates.js'
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

        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        src: ['<%= distFolder %>/<%= pkg.name %>.js']
                    }
                ]
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
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');

    grunt.registerTask('build', ['clean:dist', 'html2js:dist', 'concat:dist', 'ngAnnotate:dist', 'uglify:dist']);
    grunt.registerTask('default', ['build']);
};