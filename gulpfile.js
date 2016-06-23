//先定义任务，然后在cmd中安装插件例如：npm install gulp-uglify gulp-htmlmin ....   --save-dev
var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");
var minifycss = require("gulp-minify-css");
var autoprefixer = require("gulp-autoprefixer");

//开发后运行build压缩 上线
gulp.task("build", function() {
  gulp.run("htmlmin", "cssmin");
});
//任务名字第一个参数



//html压缩
gulp.task("htmlmin", function() {
  return gulp.src("./index.html")
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest("./output/"))
});
//css压缩
gulp.task("cssmin", function() {
  return gulp.src("./css/*.css")

  .pipe(autoprefixer({
      browsers: ["last 2 versions", "Android >=4.0"],
      //  浏览器最新两个版本      兼容问题
      cascade: false,
      //是否美化属性值
      remove: true
        //  是否去掉不必要的前缀
    }))
    .pipe(minifycss())
    .pipe(gulp.dest("./output/css/"))
});


////监听文件的变化
//gulp.task("watch", function() {
////js文件变化就执行压缩事件
//gulp.watch("app/js/*.js", ["jsmin"]);
//gulp.watch("app/css/*.css", ["cssmin"]);
//})