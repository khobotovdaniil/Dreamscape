"use strict";

const gulp        = require('gulp');
const replace = require('gulp-replace');
const webpack = require("webpack-stream");
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

const dist = "./dist/";
// const prod = "./prod/";
const prod = "/openserver/domains/Paradise/wp-content/themes/estatesparadise";
// const dist = "/openserver/domains/dist";

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(dist +"/css"))
        .pipe(browserSync.stream());
});

gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(dist))
        .pipe(browserSync.stream());
});

gulp.task('scripts', () => {
    return gulp.src("./src/js/main.js")
            .pipe(webpack({
                mode: 'development',
                output: {
                    filename: 'script.js'
                },
                watch: false,
                devtool: "source-map",
                module: {
                    rules: [
                        {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                            presets: [['@babel/preset-env', {
                                debug: true,
                                corejs: 3,
                                useBuiltIns: "usage"
                            }]]
                            }
                        }
                        }
                    ]
                    }
            }))
            .pipe(gulp.dest(dist + "/js"))
            .on("end", browserSync.reload);
});

gulp.task("prod-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'production',
                    output: {
                        filename: 'script.js'
                    },
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(prod + "/assets/js"))
});

gulp.task("prod-css", () => {
    return gulp.src("src/sass/**/*.+(scss|sass)")
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '', prefix: ''}))
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    // .pipe(replace('../', 'assets/'))
    .pipe(gulp.dest(prod +"/assets/styles/"))
    .pipe(browserSync.stream());
});

gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest(dist + "/fonts"))
        .pipe(browserSync.stream());
});

gulp.task('icons', function () {
    return gulp.src("src/icons/**/*")
        // .pipe(imagemin())
        .pipe(gulp.dest(dist + "/icons"))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src("src/img/**/*")
        // .pipe(imagemin())
        .pipe(gulp.dest(dist + "/img"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    browserSync.init({
		server: "./dist/",
		port: 4000,
		notify: true
    });

    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/js/**/*.js").on('change', gulp.parallel('scripts'));
    gulp.watch("src/fonts/**/*").on('add', gulp.parallel('fonts'));
    gulp.watch("src/icons/**/*").on('add', gulp.parallel('icons'));
    gulp.watch("src/img/**/*").on('add', gulp.parallel('images'));
});

gulp.task("build", gulp.parallel('styles', 'html', 'scripts', 'fonts', 'icons', 'images'));

gulp.task("prod", gulp.parallel('prod-js', 'prod-css'));

gulp.task('default', gulp.parallel('watch', 'build'));