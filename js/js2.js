// console.log('Hola Mundo!');


const miObjeto = {
    propiedad1: 'valor1',
    propiedad2: 'valor2',
    propiedad3: 'valor3'
};


const alumno = {
    nombre: 'Horse Luis',
    edad: 25,
    estatura: 1.90,
    hobbies: ['Nadar', 'fútbol'],
    colorPelo: 'Moreno',
    tieneCarnet: false,
    estudiar: function() {
        console.log('Estoy estudiando');
    },
    cantar: function() {
        console.log('Estoy cantando');
    }
};

alumno.nombre = 'Horse Pedro';

alumno.nuevo = true;
console.log(alumno.nuevo);


// String
const saludo = 'Hola qué tal cómo estás cómo  ';

// console.log('La longitud del string es: ', saludo.length);

// console.log('La posición de "cómo" es ', saludo.search('cómo'));

// console.log('El índice de "cómo" es ', saludo.indexOf('cómo'));

// console.log('El último índice de "cómo" es ', saludo.lastIndexOf('cómo'));

// const textoResultado = saludo.slice(-10);
// const textoResultado2 = saludo.substring(5);
// console.log('1', textoResultado);
// console.log('3', textoResultado2);

// const miSaludoEnMayusculas = saludo.replace('Hola', 'Adiós').toUpperCase();
// console.log('PRE', saludo.replace('Hola', 'Adiós').toUpperCase());
// console.log('POST', saludo);

// console.log(saludo.toUpperCase());
// console.log(saludo.toLowerCase());

// const text1 = 'Hola';
// const text2 = 'Pepe';

// const finalText = text1.concat(' ', text2, 'iwuefhsidhfisb');
// console.log("finalText", finalText)

// console.log(saludo);
// console.log(saludo.trim());

// const hobbies = 'Nadar, fútbol, playstation, saltar, comer, programar';
// console.log(hobbies.split());
// console.log(hobbies.split(', '));


// const listaDeLaCompraString = 'Manzanas, arroz, plátanos, peras, lentejas, arroz';


// const listaDeLaCompraArray = ['Manzanas', 'Arroz', 'Plátanos', 'Peras'];

// console.log('Lista inicial es', listaDeLaCompraArray);

// Añadir elemento a un array en la última posición
// listaDeLaCompraArray.push('Lentejas');

// Quitar el último elemento del array y retornarlo
// const elementoExtraido = listaDeLaCompraArray.pop();
// console.log("elementoExtraido", elementoExtraido)

// Quitar primer elemento del array y retornarlo
// listaDeLaCompraArray.shift();

// Añáde elemento al inicio del array
// listaDeLaCompraArray.unshift('Lentejas');

// console.log('La longitud de mi array es', listaDeLaCompraArray.length);

// console.log('Lista posterior es', listaDeLaCompraArray);

// console.log('Array convertido a string:', listaDeLaCompraArray.toString());
// console.log('Array convertido a string:', listaDeLaCompraArray.join(' - '));

// const nuevosItems = ['Pepinillos', 'Garbanzos'];

// console.log('Arrays concatenados', listaDeLaCompraArray.concat(nuevosItems));

// delete listaDeLaCompraArray[2];



// console.log("listaDeLaCompraArray", listaDeLaCompraArray.splice(2, 1, 'Grillos'));
// console.log("listaDeLaCompraArray", listaDeLaCompraArray);

// console.log("listaDeLaCompraArray", listaDeLaCompraArray.slice(1));
// console.log("listaDeLaCompraArray", listaDeLaCompraArray);


// listaDeLaCompraArray.sort();
// console.log("listaDeLaCompraArray", listaDeLaCompraArray);

// const notasDeClase = [9, 10, 6, 3, 22, 1, 0, 7, 8];
// notasDeClase.sort();
// console.log("notasDeClase", notasDeClase);

// listaDeLaCompraArray.reverse();
// console.log("listaDeLaCompraArray", listaDeLaCompraArray);


// const biblioteca = [
//     ['MI LIBRO', 'Libro de terror 1', 'Libro de terror 1'], // Terror
//     ['Libro de terror 1', 'Libro de terror 1', ['LIBRO INTERNO'], 'ESTE LIBRO'],
//     ['Libro de terror 1']
// ];


// console.log('Mi libro es', biblioteca[1][2][1]);




// Estructuras de control

// IF

// const candidato = {
//     bachillerato: false,
//     universidad: true,
//     colorPelo: 'Rubio'
// };

// ¿Puede entrar a la universidad?
// if(candidato.universidad) {
//     console.log('Puede entrar a la universidad');
// } else if(candidato.bachillerato) {
//     console.log('Puede entrar a la universidad');
// } else if(candidato.bachillerato) {
//     console.log('Puede entrar a la universidad');
// } else if(candidato.bachillerato) {
//     console.log('Puede entrar a la universidad');
// } else {
//     console.log('NO puede entrar a la universidad');
// }

// switch(candidato.colorPelo) {
//     case 'Moreno':
//         console.log('Eres moreno');
//     break;
//     case 'Rubio':
//         console.log('Eres rubio');
//     break;
//     case 'Castaño':
//         console.log('Eres castaño');
//     break;
//     default:
//         console.log('No tienes color de pelo');
//     break;
// }

// let contador = 1;
// while(contador) {
//     console.log('Hola');
//     if(contador >= 20) {
//         contador = false;
//     } else {
//         contador++;
//     }   
// }


// do {
//     contador = 20;
//     console.log('Hola');
// } while(contador < 20);


// const listaDeLaCompra1 = ['111', 'Arroz', '222', 'Peras', 'Lentejas', '44'];
// const listaDeLaCompra2 = ['Manzanas', 'Arroz', '66', 'Peras', 'Lentejas', '99'];
// const listaDeLaCompra3 = ['Manzanas', 'Arroz', 'Plátanos', 'Peras', 'Lentejas', 'Garbanzos'];
// const listaDeLaCompra4 = ['66', '11', 'Plátanos', 'Peras', 'Lentejas', 'Garbanzos'];


// function printBasket(listaDeLaCompra, propietario = 'desconocido') {
//     console.log('LISTA DE LA COMPRA DE', propietario);
//     for(let i = 0; i < listaDeLaCompra.length; i+=1) {
//         console.log(listaDeLaCompra[i]);
//     }
// }

// printBasket(listaDeLaCompra1);



// function lotery(name) {
//     if(name !== 'Víctor') {
//         return;
//     }
//     return 'Has ganado la lotería en Nigeria. Reclama tu premio';
// }

// const message = lotery('Pepe');
// console.log('El mensaje es: ', message);

// const sayHello = (name) => {
//     console.log(name);
// };

// sayHello(name);


// function sayHello(name) {
//     console.log('Hola', name);
// }


// sayHello('Horse Luis');

// sayHello('Ofelia');

// sayHello(234);

// sayHello(true);
