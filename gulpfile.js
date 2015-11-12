var gulp     = require('gulp');
var $        = require('gulp-load-plugins')();
var mq       = require('media-query-extractor');
var rimraf   = require('rimraf');
var panini = require('panini');
var yargs    = require('yargs').argv;
var sequence = require('run-sequence');
// Look for the --production flag
var isProduction = !!(yargs.production);

// Delete the "dist" folder
// This happens every time a build starts
gulp.task('clean', function(done) {
  rimraf('./dist', done);
});

// Compile layouts, pages, and partials into flat HTML files
// Then parse using Inky templates
gulp.task('pages', function() {
  return gulp.src('./src/pages/**/*.html')
    .pipe(panini({
      layouts: './src/layouts',
      partials: './src/partials/**/*.html'
    }))
    .pipe($.inky())
    .pipe(gulp.dest('./dist'));
});

// Compile Sass into CSS
gulp.task('sass', function() {
  return gulp.src(['./src/assets/scss/app.scss','../foundation-emails/scss/ink.scss'])
    .pipe($.sass())
    .pipe(gulp.dest('./dist/css'));
});

// Inline CSS and minify HTML
gulp.task('inline', ['build'], function() {
  // Extracts media query-specific CSS into a separate file
  mq('./dist/assets/css/app.css', './dist/assets/css/app-mq.css');

  // Injects that extracted CSS into the HTML
  var inject = $.inject(gulp.src('./dist/assets/css/app-mq.css'), {
    starttag: '<!-- inject:mq -->',
    transform: function(path, file) {
      return '<style>\n' + file.contents.toString() + '\n</style>';
    }
  });

  return gulp.src('./dist/*.html')
    .pipe($.inlineCss())
    .pipe(inject())
    .pipe($.htmlmin())
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function() {
  return gulp.src('./src/images/*')
    .pipe(gulp.dest('./dist/images'))
  ;
});

// Build the "dist" folder by running all of the above tasks
gulp.task('build', function(done) {
  var tasks = ['pages', 'sass', 'copy'];
  if (isProduction) tasks.push('inline');

  sequence('clean', tasks, done);
});

// Start a server with LiveReload to preview the site in
gulp.task('server', ['build'], function() {
  return gulp.src('./dist')
    .pipe($.webserver({
      host: 'localhost',
      port: 8000,
      livereload: true,
      open: true
    }));
});

// Build emails, run the server, and watch for file changes
gulp.task('default', ['build', 'server'], function() {
  gulp.watch('./src/**/*.html', ['pages']);
  gulp.watch('./src/assets/scss/**/*.scss', ['sass']);
});
