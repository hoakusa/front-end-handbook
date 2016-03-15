
var gulp = require("gulp"),
watch = require("gulp-watch"),

fileInclude = require("gulp-file-include"),
htmlMin = require("gulp-html-minifier"),

svgMin = require("gulp-svgMin"),

distFolder = "dist";

gulp.task("build-files", function(){
    
    gulp.src("html/pages/*.html").pipe(fileInclude({prefix: "@@",basepath: "@file"})).pipe(htmlMin({collapseWhitespace: true})).pipe(gulp.dest(distFolder));
	
});

gulp.task("svg", function(){
	
	gulp.src("icons/*.svg").pipe(svgMin()).pipe(gulp.dest(distFolder + "/icons"));
	
});

gulp.task("build-site", function(){
	
	gulp.watch("html/pages/*.html", ["build-files"]);
	gulp.watch("index.html", ["html"]);
	
});

