module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        svgmin: {
            options: {
                plugins: [
                    { removeViewBox: false },
                    { removeTitle: true },
                    { removeDesc: true },
                    { removeUselessStrokeAndFill: false },
                    { removeXMLNS: false },
                ],
            },
            dist: {
                expand: true,
                cwd: "dist/images/svg",
                src: ["*.svg"],
                dest: "dist/images/inline-svg",
                ext: ".svg",
            },
        },

        concat: {
            options: {
                separator: ";\n",
            },
            dist: {
                src: [
                    "src/js/libraries/*.js",
                    "src/js/components/*.js",
                    "src/js/layouts/*.js",
                    "src/js/pages/*.js",
                    "src/js/vendor/*.js",
                ],
                dest: "dist/js/script.js",
            },
        },

        uglify: {
            options: {
                mangle: false,
                banner:
                    '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
            },
            dist: {
                files: {
                    "dist/js/script.min.js": ["<%= concat.dist.dest %>"],
                },
            },
        },

        postcss: {
            options: {
                map: false,
                processors: [
                    require("autoprefixer")({
                        browsers: ["last 5 versions"],
                    }),
                    require("cssnano")(),
                ],
            },
            dist: {
                src: "dist/css/style.min.css",
            },
        },

        sass: {
            dist: {
                options: {
                    sourcemap: "none",
                    style: "compressed",
                },
                files: {
                    "dist/css/style.min.css": "src/sass/style.scss",
                },
            },
        },

        watch: {
            css: {
                options: {
                    spawn: false,
                },

                files: "src/sass/**/*.scss",
                tasks: ["sass", "postcss"],
            },
            js: {
                options: {
                    spawn: false,
                },

                files: "<%= concat.dist.src %>",
                tasks: ["concat", "uglify"],
            },
            img: {
                files: ["dist/images/svg/*.svg"],
                tasks: ["svgmin"],
            },
        },

        browserSync: {
            files: {
                src: ["dist/css/*.css", "dist/js/*.js", "dist/*.html"],
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: "./",
                    directory: true,
                },
                https: true,
            },
        },
    });

    // Load the plugins
    grunt.loadNpmTasks("grunt-postcss");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-browser-sync");
    grunt.loadNpmTasks("grunt-svgmin");

    // Register tasks
    grunt.registerTask("default", ["svgmin", "browserSync", "watch"]);
    grunt.registerTask("prefixer", "postcss");
    grunt.registerTask("css", ["sass"]);
    grunt.registerTask("svg", ["svgmin"]);
    grunt.registerTask("js", ["concat", "uglify"]);
};
