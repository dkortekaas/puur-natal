
"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
//const browsersync = require("browser-sync").create();
const cp = require("child_process");
const cssnano = require("cssnano");
const del = require("del");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
//const webpack = require("webpack");
//const webpackconfig = require("./webpack.config.js");
//const webpackstream = require("webpack-stream");


// Clean assets
function clean() {
    //return del(["assets/"]);
    return true;
}

// Optimize Images
function images() {
    return gulp
      .src("assets/img/**/*")
      .pipe(newer("assets/img"))
      .pipe(
        imagemin([
          imagemin.gifsicle({ interlaced: true }),
          imagemin.jpegtran({ progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [
              {
                removeViewBox: false,
                collapseGroups: true
              }
            ]
          })
        ])
      )
      .pipe(gulp.dest("assets/img"));
}

// CSS task
function css() {
    return gulp
      .src("sass/theme.scss")
      .pipe(plumber())
      .pipe(sass({ outputStyle: "expanded" }))
      .pipe(gulp.dest("assets/stylesheet"))
      .pipe(rename({ suffix: ".min" }))
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(gulp.dest("css"))
  }

// Transpile, concatenate and minify scripts
function scripts() {
    return (
      gulp
        .src(["assets/js/dev/*.js"])
        .pipe(plumber())
        //.pipe(webpackstream(webpackconfig, webpack))
        // folder only, filename is specified in webpack config
        .pipe(gulp.dest("assets/js/"))
        //.pipe(browsersync.stream())
    );
  }

// Watch files
function watchFiles() {
    gulp.watch("sass/**/*.scss", css);
    //gulp.watch("assets/scripts/**/*.js", gulp.series(scriptsLint, scripts));
    // gulp.watch(
    //   [
    //     "./_includes/**/*",
    //     "./_layouts/**/*",
    //     "./_pages/**/*",
    //     "./_posts/**/*",
    //     "./_projects/**/*"
    //   ],
    //   gulp.series(jekyll, browserSyncReload)
    // );
    //gulp.watch("assets/images/**/*", images);
  }



// define complex tasks
//const js = gulp.series(scripts);
//const build = gulp.series(clean, gulp.parallel(css, images, js));
const build = gulp.parallel(css);
const watch = gulp.parallel(watchFiles);

// export tasks
//exports.images = images;
exports.css = css;
//exports.js = js;
//exports.jekyll = jekyll;
//exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;
