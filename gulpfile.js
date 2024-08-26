//anteponer la palabra clave export en una función
//agregar la palabra "done" para indicar que finaliza la función
//src -> archivos fuente dest -> archivo destino

import {src, dest, watch} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass' //utlizar sass en gulfile

const sass = gulpSass(dartSass); //variable que ejecuta el codigo sass

//Tarea para compilar css
//pipe es como mandar a llamar funciones en el orden que estalecemos
export function css(done) {
    src('src/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css'))
    done()
}

//Compilar en cada cambio si dejar de ejcutarse
//**/*.scss compilar todos los archivos scss */
export function dev() {   
    watch('src/scss/**/*.scss',css)
}

















