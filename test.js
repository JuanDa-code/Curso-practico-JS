/*
Variables y operaciones.

1.  a) Una Variable es un espacio en memoria en la cual se puede guardar 
        información para poder utilizarla mas adelante en el codigo.
    b) Declarar una variable tan solo es darle a la variable el alcance 
        y el tipo de variable que será, si var o let, o const, y si es 
        string o int, o decimal etc. En cambio, inicializar una variable 
        es darle un valor inicial.
    c) Sumar números es incrementar su valor, es decirle al número 5 
        sumele 5 este valor será 10. Por el contrario, si le decimos 
        al programa que le sumer '5' a '5', lo que mostrará el codigo 
        sera 55. Ya que estos no son numeros sino son cadenas de texto, 
        el + lo unico que hará será unir los textos.
    d) El + es el operador que nos permite sumar y concatenar.

2.  a) Nombre : Str
    b) Apellido : Str
    c) Nombre de usuario en Platzi : Str (Concatenarle al inicio un @, o hacer una condicion)
    d) Edad : Int
    e) Correo electronico : Str (Obligar a utilizar nomblecatira de un correo)
    f) Mayor de edad : Boolean
    g) Dinero Ahorrado : Int o Decimal, dependiendo la moneda.
    h) Deudas : Int o Decimal, dependiendo la moneda.
    
3. Traduce a codigo JS las variables del ejemplo anterior.

*/

let nombre = 'Juan', apellido = 'Oviedo', nombre_usuario_platzi = 'JuanDa-code', edad = 19, correo_electronico = 'juandavidoviedo.ing@gmail.com', isMayor_edad = true, dinero_ahorrado = 400000, deudas = 200000;

// 4. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior.

console.log('Nombre completo: ' + nombre + ' ' + apellido);

let dinero_real = dinero_ahorrado - deudas;

console.log('Dinero Real: ' + dinero_real);

/*
Funciones.

1.  a) Una funcion es un bloque de codigo que creamos para poder reutilizar 
        codigo mas adelante.
    b) Una funcion me sirve cuando tengo muchas operaciones o codigo que 
        tengo que usar en varias ocaciones. De esta forma no se crea codigo
        repetitivo. Tambien nos sirve para mejorar el orden y la legibilidad
        de nuestro codigo.
    c) Las funciones reciben parametros cuando las creamos. Y les enviamos 
        argumentos cuando las ejecutamos.
*/

// 2. Convierte el siguiente codigo en una funcion.

function greeting (name, lastname, nickname) {
    var completeName = name + ' ' + lastname;
    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}.`);
};

/*
Condicionales.

1.  a) Un condicional es una sentencia donde se comparan dos valores, y en tal caso que se cumpla aquella condicion se ejecuta un codigo.
    b) En JS hay tres tipos de condicionales, if, se utiliza para ejecutar un bloque de codigo si se cumple alguna condicion.
        if else, que en tal caso que no se cumpla la condicion ejecute otro bloque de codigo, y por ultimo, switch, el cual ejecuta un
        bloque de codigo dependiendo de un valor de una variable o de una expresion.
    c) Si se pueden combinar funciones y condicionales.

2. Replica el comportamiento del siguiente codigo que usa la sentencia switch utilizando if, else y else if.

*/


const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

// Respuesta

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

// 3. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if)

const planes = [
    { tipoDeSuscripcion: 'Free', descripcion: 'Solo puedes tomar los cursos gratis'},
    { tipoDeSuscripcion: 'Basic', descripcion: 'Puedes tomar casi todos los cursos de Platzi durante un mes'},
    { tipoDeSuscripcion: 'Expert', descripcion: 'Puedes tomar casi todos los cursos de Platzi durante un año'},
    { tipoDeSuscripcion: 'ExpertPlus', descripcion: 'Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año'}
];

for (let i = 0; i < planes.length; i++) {
    if (planes[i].tipoDeSuscripcion == tipoDeSuscripcion) {
        console.log(planes[i].descripcion);
    }
}

/*

Ciclos

1.  a) Un ciclo en un codigo que permite repetir un bloque de codigo hasta que se
        cumpla una condicion.
    b) En JS existen 3 tipos de condicionales: for, while, do... while. el for y el while
        son muy similares, ya que van a ejecutar el bloque de codigo hasta que se cumpla la
        condicion. En cambio el do while, primero ejecuta el bloque de codigo y despues 
        realiza la condicion, si se cumple continua el bucle.
    c) Un ciclo infinito es cuando en un ciclo la condicion esta hecha de tal forma que nunca
        sea falsa, por ende nunca dejara de ejecutar el bloque de codigo que contiene el bucle.
        Esto es un problema ya que puede hacer que un programa se bloquee o se cuelgue.
    d) Si se pueden mezclar ciclos y condicionales, ya que estos puede solucionar muchos problemas.

2. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

*/

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

// Solucion:

var i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

i = 10;

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

/*

3.  Escribe un codigo en JS que le pregunte a los usuarios cuanto es 2 + 2. Si responden bien,
    mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

*/

do {
    alert("Bienvenidos a nuestro test, responde a nuestra pregunta.");
    
    var answer = prompt("Cuanto es 2 + 2?");
    
    if (answer == 4) {
        alert("Felicidades, tu respuesta ha sido correcta.");
    }
} while (answer == 4);

/*
Listas

1.  a) Un array es un conjunto de datos, el cual puede guardar distintas variables de un mismo tipo,
        o de varios tipos(Int, string, decimal, etc).
    b) Un objeto es una instancia de una clase, que es un tipo de plantilla la cual puede almacenar
        uno tipo de datos con un conjunto de propiedades, y unos metodos.
    c) Depende de lo que necesita asi mismo puede ser mejor utilizar arrays u objetos.
    d) Si se pueden mezclar, un array puede contener muchos objetos, o por el contrario, un objeto
        puede contener una propiedad la cual tenga como tipo de dato un array.

2. Crea una funcion que pueda recibir cualquier array como parametro e imprima su primer elemento.
*/

function imprimirPrimerElemento (myArray) {
    console.log(myArray[0]);
}

/*
3. Crea una funcion que pueda recibir cualquier array como parametro e imprima todos sus elementos
    uno por uno(no se vale imprimir el array completo).
*/

function imprimirAll (myArray) {
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
}

/*
4. Crea una funcion que pueda recibir cualquier objeto como parametro e imprima todos sus elementos
    uno por uno(no se vale imprimir el array completo).
*/

function imprimirObject (myObject) {
    for (let object of myObject) {
        console.log(object);
    }
}