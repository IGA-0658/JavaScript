var nombre;
var edad;
var categoria;

do {
nombre = prompt('Ingrese nombre: '); 
edad = prompt('Ingrese edad: ');
categoria = prompt('Ingrese categoria A2 - B2 - C6 - F8');
} while( confirm("Desea guardar los datos?") == false); /* se sigue ejecutando hasta que se de la cond, es decir se da aceptar */

document.write("Usted es " + nombre + ", su edad es de " + edad + " y su categoría es " + categoria);
