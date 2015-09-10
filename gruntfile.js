module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dest/index.html': 'index.html'
                }
            }
        },
        cssmin: {
            sitecss: {
                options: {
                    banner: '/* My minified css file */'
                },
                files: {
                    'assets/css/compiled.css': [
                        'assets/css/styles.css',
                        'assets/css/box.css',
                        'assets/css/font.css',

                        'assets/css/modal.css',
                        'assets/css/header.css',
                        'assets/css/footer.css',

                        'app/assets/home.css',
                        'app/assets/repair.css',
                        'app/assets/channel.css',
                        'app/assets/speedtest.css',
                        'app/assets/chat.css',
                        'app/assets/information.css',
                        'app/assets/wifi.css'
                    ]
                }
            }
        },
        concat: {

            js: {
                src: [

                        'assets/js/functions.js',
                        'assets/js/language.js',


                        'assets/libs/angular.min.js',
                        'assets/libs/angular-route.js',
                        'assets/libs/angular-sanitize.js',
                        'assets/libs/standalone-framework.js',
                        'assets/libs/highcharts.js',
                        'assets/libs/highcharts-ng.min.js',

                    //    'assets/libs/highcharts-more.js',

                        'assets/js/app.js',
                        'assets/js/controller.js',

                        'app/components/index/home/homeService.js',
                        'app/components/index/home/homeController.js',

                        'app/components/index/home/repairService.js',
                        'app/components/index/repair/repairController.js',
                    
                        'app/components/index/channel/channelController.js',

                        'app/components/index/intruders/intrudersService.js',
                        'app/components/index/intruders/intrudersController.js',

                        'app/components/index/speedtest/speedtestController.js',

                        'app/components/index/chat/chatController.js',
                        'app/components/wifi/wifiController.js',

                        "app/components/information/informationService.js",
                        "app/components/information/informationController.js"

                     ],
                dest: 'dest/concat.js'
            }
        },

        uglify: {
            js: {
                files: {
                    'dest/concat.min.js': ['dest/concat.js']
                }
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    //    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', [
                            'concat:js',
                            'uglify:js',
                            'cssmin',
                            'htmlmin'
                        //    ,'imagemin' 
                        ]);

};
