// ECMAScript
module.exports = function(grunt){
  // 가. 프로젝트환경설정
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    //플러그인 설정
    serve:{
      path:"d:/grunt-templete",
      options:{
        port:9000
      }
    }

    //HTML Task
    //grunt-htmlhint : html 구문 검사
    //grunt-includes : html 환경에서 인크루드를 쓸수있게 해줌.

    //CSS Task
    //grunt-contrib-less : css 확장언어 전처리기를 사용할 수있게해줌
    //grunt-contrib-csslint : css 구문검사
    //grunt-autoprefixer : 크로스브라우징에 맞게 벤더프리픽스를 삽입
    //grunt-csscomb :css를 우선순위에 맞게 정렬해주는도구
    //grunt-contrib-cssmin : css 최적화를 위해 css 압축

    //javascript Task
    //grunt-contrib-jshint : javascript 구문검사
    //grunt-contrib-concat : javascript 파일을 하나로 합침
    //grunt-uglify : 자바스크립트 압축

    //others Task
    //grunt-contrib-clean : 폴더 및 파일 삭제
    //grunt-contrib-copy : 폴더 및 파일 복사
    //grunt-contrib-imagemin : 이미지 최적화

    //watch Task
    //grunt-contrib-watch : 변경된 작업파일을 실시간으로 동기화
    //grunt-contrib-connect : 로컬 서버를 통해 브라우저로 확인

    //최적화
    //grunt-newer : 변경된파일 빌드
    //grunt-concurrent : 다중 테스크를 병렬로 실행하기
    //time-grunt : 빌드시키는대 걸린시간
    //load-grunt-tasks :  자동으로 grunt 태스크를 로드

})

// 나. 플러그인 로드
// grunt.LaodNpmTasks('플러그인명')
grunt.loadNpmTasks('grunt-serve');

// 다. task 실행
grunt.registerTask('default',['serve'])
// HTML Task  실행
// css Task  실행
// javascript Task  실행
// watch Task  실행
// build task 실행
// default task 실행










}
