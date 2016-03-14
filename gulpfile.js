
var gulp = require("gulp"),
watch = require("gulp-watch"),

fileInclude = require("gulp-file-include"),
htmlMin = require("gulp-html-minifier"),

svgMin = require("gulp-svgMin");



gulp.task("html", function() {

	gulp.src("index.html").pipe(htmlMin({collapseWhitespace: true})).pipe(gulp.dest("dist"));

});

gulp.task("build-files", function() {
    
    gulp.src("html/pages/*.html").pipe(fileInclude({prefix: "@@",basepath: "@file"})).pipe(gulp.dest("dist"));
	
});

gulp.task("svg", function(){
	
	gulp.src("icons/*.svg").pipe(svgMin()).pipe(gulp.dest("dist/icons"));
	
});

gulp.task("build-site", function(){
	
	gulp.watch("html/pages/*.html", ["build-files"]);
	gulp.watch("index.html", ["html"]);
	
});

