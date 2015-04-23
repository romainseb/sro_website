module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            allFiles: [
                'app/**/*.js',
                '!app/templates.js',
                '!app/vendors/**/*.js'
            ],
            options: {
                jshintrc: true,
                reporter: require('jshint-stylish')
            }
        },
        ngtemplates: {
            website: {
                src: ['app/**/*.html'],
                dest: 'app/templates.js',
                standalone: true,
                options: {
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                }
            }
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            strict: {
                options: {
                    import: 2
                },
                src: [
                    'app/**/*.css',
                    '!app/vendors/**/*.css'
                ]
            }
        },
        concat: {
            css: {
                src: [
                    'app/**/*.css'
                ],
                dest: 'dist/style.css'
            },
            'js': {
                src: [
                    "app/vendors/js/angular.min.js",
                    "app/app.js",
                    "app/**/*.js"
                ],
                dest: 'dist/script.js'
            }
        },
        autoprefixer: {
            single_file: {
                src: 'dist/style.css',
                dest: 'dist/style.css'
            }
        },
        cssmin: {
            css: {
                src: 'dist/style.css',
                dest: 'dist/style.min.css'
            }
        },
        uglify: {
            js: {
                options: {
                    sourceMap: false,
                    sourceMapName: 'dist/script.min.js.map'
                },
                files: {
                    'dist/script.min.js': ['dist/script.js']
                }
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            application: {
                files: {
                    'dist/script.js': ['dist/script.js']
                }
            }
        },
        watch: {
            html: {
                files: ['app/**/*.html'],
                tasks: ['ngtemplates']
            },
            css: {
                files: ['app/**/*.css'],
                tasks: ['concat:css', 'autoprefixer', 'cssmin', "csslint", 'clean:end-build']
            },
            js: {
                files: ['app/**/*.js'],
                tasks: ['concat:js', 'ngAnnotate', 'uglify', 'jshint', 'clean:end-build'],
                options: {
                    interrupt: true
                }
            },
            livereload: {
                files: ['dist/*.min.*'],
                options: {livereload: true}
            }
        },
        copy: {
            bowerFiles: {
                src: [
                    'tmp/components/**/*.min.js',
                    'tmp/components/angular-i18n/angular-locale_fr-fr.js'
                ],
                dest: 'app/vendors/js/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            }
        },
        bower: {
            install: {
                options: {
                    copy: false
                }
            }
        },
        clean: {
            tmp: ["tmp/"],
            dist: ["dist/"],
            "end-build": ['dist/style.css', 'dist/script.js']
        },
        express: {
            dev: {
                options: {
                    script: 'server.js',
                    spawn: false
                }
            }
        },
        sro_create_angular_components: {
            website: {
                views: [
                    "app/views/home"
                ],
                directives: [
                    "app/views/home/components/sroHeader",
                    "app/views/home/components/sroResume",
                    "app/views/home/components/sroAbout",
                    "app/views/home/components/sroStudies",
                    "app/views/home/components/sroSkills",
                    "app/views/home/components/sroSkillBlock"
                ]
            }
        }
    });

    grunt.registerTask('default', [
        'clean:dist',
        'concat',
        'autoprefixer',
        'cssmin',
        'ngtemplates',
        'ngAnnotate',
        'uglify',
        'clean:end-build',
        'csslint',
        'jshint'
    ]);

    grunt.registerTask('generate files', [
        'sro_create_angular_components'
    ]);

    grunt.registerTask('default + watch', [
        'default',
        'watch'
    ]);

    grunt.registerTask('default + express + watch', [
        'default',
        'express',
        'watch'
    ]);

    grunt.registerTask('bower-task', [
        "bower",
        "copy:bowerFiles",
        "clean:tmp"
    ]);
};
