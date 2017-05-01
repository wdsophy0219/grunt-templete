// ECMAScript

module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        // 플러그인 설정~
        serve:{
          path:"d:/grunt-templete",
          options:{
            port:9000
          }


        // HTML Task
        // grunt-html hint : html 구문 검사
        // grunt-includes : html includes 사용

        // CSS Task
        // grunt-contrib-less : css 확장언어 전처리기를 사용할 수 있게해줌
        // grunt-contrib-cssLint : css 구문검사
        // grunt-autoprefixer : 크로스브라우징에 맞게 venderprefix
        // grunt-csscomb : css를 우선순위에 맞게 정렬해주는 도구
        // grunt-contrib-cssmin : css 최적화를 위해 css 압축

        // javascript Task
        // grunt-contrib-jshint : javascript구문 검사
        // grunt-contrib-concat : javascript파일을 하나로 합쳐줌.
        // grunt-uglify : javascript 파일 압축 (원본파일과 다르게 변수명을 한 글자로 압축)

        // others Task
        // grunt-contrib-clean : 폴더 및 파일 삭제
        // grunt-contrib-copy : 폴더 및 파일 복사
        // grunt-contrib-imagemin : image 파일 최적화

        // watch Task  파일의 변화를 감지
        // grunt-contrib-watch : ★★ 변경된 작업파일을 실시간으로 동기화
        // grunt-contrib-connect : local 서비를 통해 브라우저로 확인

        // 최적화
        // grunt-newer : 변경된 파일만 빌드
        // grunt-concurrent : complie 성능최적화, 다중 테스크를 병렬로 실행시킴
        // time-grunt :  빌드시키는데 걸린시간
        // load-grunt-tasks : 자동으로 grunt 테스크를 로드

    })

        // 나. 플러그인 로드
        // grunt.loadNpmTasks('플러그인명')
        grunt.loadNpmTasks('grunt-serve');

        // 다. task 실행
        grunt.registerTask('default',['serve'])
        // Html Task 실행
        // css Task 실행
        // javascript Task 실행
        // watch Task 실행
        // build Task 실행
        // default Task 실행


}
