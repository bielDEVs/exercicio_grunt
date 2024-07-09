module.exports = function(grunt) {

    // Configuração do projeto
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Configuração do LESS
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            }
        },

        // Configuração do Uglify (compressão de JavaScript)
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'main.js',
                dest: 'main.min.js'
            }
        }
    });

    // Carrega os plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Tarefas padrão
    grunt.registerTask('default', ['less', 'uglify']);
};
