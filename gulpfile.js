const gulp = require("gulp");

const rutas = {
	rutaCSS: 'src/server/css/*.css',
	rutasJS: 'src/server/js/*.js',
	rutaAssets: 'src/client',
	rutaNodeModules: 'node_modules/'
};
gulp.task("estilos", function(){
	gulp.src(rutas.rutaNodeModules)
	.pipe(gulp.dest(rutas.rutaAssets))
});
gulp.task("assets", function(){
	gulp.src('index.html')
	.pipe(gulp.dest(rutas.rutaAssets))
});
gulp.task("prepararCSS", function(){
	gulp.src(rutas.rutaCSS)
	.pipe( gulp.dest(rutas.rutaAssets + "/css"))
});
gulp.task('prepararJS', function(){
	gulp.src(rutas.rutasJS)
	.pipe( gulp.dest(rutas.rutaAssets + "/js"))
});
gulp.task("observar", function(){
	gulp.watch('index.html',['assets']);
	gulp.watch(rutas.rutaCSS,['prepararCSS']);
	gulp.watch(rutas.rutasJS,['prepararJS']);
});
