module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            allFiles: [
                'app/**/*.js',
                '!app/vendors/**/*.js'
            ],
            options: {
                jshintrc: true,
                reporter: require('jshint-stylish')
            }
        },
        ngtemplates:    {
            website:{
                src:        ['index.html','app/**/*.html'],
                dest:       'app/templates.js',
                standalone : true,
                options:    {
                    htmlmin: {
                        collapseBooleanAttributes:      true,
                        collapseWhitespace:             true,
                        removeAttributeQuotes:          true,
                        removeComments:                 true, // Only if you don't use comment directives!
                        removeEmptyAttributes:          true,
                        removeRedundantAttributes:      true,
                        removeScriptTypeAttributes:     true,
                        removeStyleLinkTypeAttributes:  true
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
        autoprefixer: {
            single_file: {
                src: 'dist/style.css',
                dest: 'dist/style.css'
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app1: {
                files: {
                    'dist/script.js': ['dist/script.js']
                }
            }
        },
        cssmin: {
            css: {
                src: 'dist/style.css',
                dest: 'dist/style.min.css'
            }
        },

        //Specific
        concat: {
            css: {
                src: [
                    'app/**/*.css'
                ],
                dest: 'dist/style.css'
            },
            'js' : {
                src : [
                    "app/app.js",
                    "app/**/*.js",
                    "!app/vendors/**/*.js"
                ],
                dest : 'dist/script.js'
            },
            'vendors' : {
                src : [
                    "app/vendors/**/angular.min.js",
                    "app/vendors/**/*.js"
                ],
                dest : 'dist/vendors.js'
            }

        },
        uglify : {
            js: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'dist/script.min.js.map'
                },
                files: {
                    'dist/script.min.js' : [ 'dist/script.js' ]
                }
            },
            vendors:{
                options: {
                    sourceMap: false,
                    sourceMapName: 'dist/vendors.min.js.map'
                },
                files: {
                    'dist/vendors.min.js' : [ 'dist/vendors.js' ]
                }
            }
        },
        watch: {
            html:
            {
                files:['app/**/*.html','index.html'],
                tasks:['ngtemplates']
            },
            css:
            {
                files: ['app/**/*.css'],
                tasks: ['concat:css','autoprefixer', 'cssmin',"csslint",'clean:dist-files']
            },
            js:
            {
                files: ['app/**/*.js',"!app/vendors/**/*.js"],
                tasks: ['concat:js',
                        'ngAnnotate',
                        'uglify:js',
                        'jshint',
                        'clean:dist-files'
                ]
            },
            vendors:
            {
                files: ["app/vendors/**/*.js"],
                tasks: ['concat:vendors',
                        'uglify:vendors',
                        'clean:dist-files'
                        ]
            }
        },

        //Bower
        copy: {
            bowerFiles: {
                src:
                    [
                        'tmp/components/**/*.min.js',
                        'tmp/components/angular-i18n/angular-locale_fr-fr.js'
                    ],
                dest: 'app/vendors/js/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            fontFiles:
            {
                src:
                    [
                        'app/vendors/css/fonts/*'
                    ],
                dest: 'dist/fonts/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            }
        },
        bower: {
            install: {
                options:
                {
                    copy:false
                }
            }
        },
        clean:
        {
            tmp: ["tmp/"],
            dist: ["dist/"],
            "dist-files":["dist/script.js","dist/style.css","dist/vendors.js"]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ng-annotate');

    grunt.registerTask('default', [
        'clean:dist',
        'copy:fontFiles',
        'ngtemplates',
        'concat',
        'autoprefixer',
        'cssmin',
        'csslint',
        'ngAnnotate',
        'uglify',
        'jshint',
        'clean:dist-files'
    ]);

    grunt.registerTask('bower-task', [
        "bower",
        "copy:bowerFiles",
        "clean:tmp"
    ]);
};
