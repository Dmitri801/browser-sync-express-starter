const gulp = require("gulp");
const browserSync = require("browser-sync");
var nodemon = require("gulp-nodemon");

gulp.task("nodemon", cb => {
  let started = false;

  return nodemon({
    script: "server.js"
  }).on("start", () => {
    if (!started) {
      cb();
      started = true;
    }
  });
});

gulp.task(
  "browser-sync",
  gulp.series("nodemon", () => {
    browserSync.init(null, {
      proxy: "http://localhost:7000",
      files: ["public/**/*.*"],

      port: 9000
    });
  })
);

gulp.task("serve", gulp.series("browser-sync", () => {}));
