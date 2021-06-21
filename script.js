//Arrays
//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

months.forEach(item => {
    document.write(item, `<br>`);
});

//2-  Crear un script que solicite al usuario mediante un prompt el nombre de  y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

//Mostrar la longitud del arreglo.
//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
//Añade en última posición la ciudad de París.
//Escribe por pantalla el elemento que ocupa la segunda posición.
//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let cities = [];

do {
    const newCity = prompt('Add a new city');
    if (newCity != 0) {
        cities.push(newCity);
    } else {
        alert('Inserte una ciudad valida')
    }
} while (confirm('Do you want to continue?'));

document.write(cities, `<br>`, cities.length, `<br>`, cities[1], cities[2], cities[3], cities[cities.length - 1], `<br>`, cities.push('Paris'), `<br>`, cities[2], `<br>`, cities[2] = 'Barcelona')

//3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let a = b = c = d = e = f = 0;
let totalTiradas = 0;

function tiradaDado() {
    let dado6caras = parseInt(6 * Math.random() + 1);
    return dado6caras;
}

for (i = 1; i <= 50; i++) {
    tirada = tiradaDado();
    switch (tirada) {
        case 1:
            a++;
            break;
        case 2:
            b++;
            break;
        case 3:
            c++;
            break;
        case 4:
            d++;
            break;
        case 5:
            e++;
            break;
        case 6:
            f++;
            break;
    }
}

totalTiradas = a + b + c + d + e + f;

document.write("El 1 ha salido " + a + " veces<br>");
document.write("El 2 ha salido " + b + " veces<br>");
document.write("El 3 ha salido " + c + " veces<br>");
document.write("El 4 ha salido " + d + " veces<br>");
document.write("El 5 ha salido " + e + " veces<br>");
document.write("El 6 ha salido " + f + " veces<br>");
document.write("<br>")
document.write("Total de lanzamientos del dado: " + totalTiradas);


//Funciones

//1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function numbers(number) {
    if (number % 2 == 0) {
        document.write('Es par');
    } else {
        document.write('No es par');
    }
}
numbers(4);

//2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function info(cadena) {
    let resultado = "La cadena \"" + cadena + "\" ";

    // Comprobar mayúsculas y minúsculas
    if (cadena == cadena.toUpperCase()) {
        resultado += " está formada sólo por mayúsculas";
    }
    else if (cadena == cadena.toLowerCase()) {
        resultado += " está formada sólo por minúsculas";
    }
    else {
        resultado += " está formada por mayúsculas y minúsculas";
    }

    return resultado;
}

alert(info("holaaa"));


//3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

//La fórmula del perímetro  es p = 2*(a +b)
const numberOne = Number(prompt('Insert the first number'));
const numberTwo = Number(prompt('Insert the second number'));

function perimetro(numberOne, numberTwo) {
    console.log(numberOne * numberTwo);
}

perimetro(numberOne, numberTwo)

//4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function escribirTablaMultiplicar(j) {
    document.write("<ul>");

    for (i = 1; i <= 10; i++) {
        document.write("<li>");
        document.write(j + "x " + i + "= " + j * i);
        document.write("</li>");
    }
    document.write("</ul>");
}

escribirTablaMultiplicar(5);
