/* 1- Contador del 1 al 10:
Utiliza un bucle FOR para imprimir en consola los números del 1 al 10. También, puedes
hacerlo con los bucles WHILE o DO WHILE para ver sus diferencias. */

/*for(let i=1; i <= 10; i++){
    console.log(i);
};

let i = 1;
while( i <= 10){
    console.log(i);
    i++
};

let j = 0;
do{
    console.log(j);
    j++
}while( j <= 10); */

/*2- Números pares del 1 al 20:
Imprime todos los números pares del 1 al 20 utilizando un bucle FOR.

for(let i = 0; i <= 20; i+=2){
    console.log(i);
};*/

/*3- Imprimir nombres en consola:
Declara un arreglo de 6 nombres y utiliza un bucle FOR OF para imprimir cada uno de esos
nombres en la consola.

const prendas = ["remera", "pantalon", "medias", "gorra", "camisa","saco"];

for(prenda of prendas){
    console.log(prenda);
};*/

/*4- Imprimir propiedades en consola:
Crea un objeto PRODUCTO en donde tenga las siguientes propiedades: nombre, precio,
marca y anio_lanzamiento. Luego, utiliza un bucle FOR IN para imprimir en consola cada
una de sus propiedades junto a sus valores.

const Producto = {
    nombre: 'remera',
    precio: 152,
    marca: 'gucci',
    anio_lanzamiento: 1853
};

for (const Propiedad in Producto){
    console.log(Propiedad, Producto[Propiedad]);
};*/

/*5- Calcular promedio:
Crea un arreglo con 5 calificaciones, calcula el promedio de esas calificaciones y muéstralo
en la consola.

const notas = [10, 5, 3, 9, 8];

let suma = 0; // const NO porque no le deja variar el

for (const valor of notas){
    suma += valor;
};

console.log(suma/notas.length);*/

/*6- Calcular edad:
Crea un objeto PERSONA en donde tenga 3 propiedades: nombre, apellido y año de
nacimiento. Basándose en ese objeto, declara una variable llamada ANIO y otra llamada
EDAD y haz el cálculo correspondiente. Por último, Imprime en consola un mensaje en
donde digas como se llama la persona y su edad utilizando sus respectivas propiedades.

const Persona = {
    nombre: "Fede",
    apellido: "Zuber",
    anioDeNacimiento: 2001
}

let Anio = 2023;
let Edad = Anio - Persona.anioDeNacimiento;

console.log(` ${Persona.nombre} ${Persona.apellido} tiene ${Edad} años`);*/

/*7- Verificación de edad:
Declara una variable EDAD con un valor numérico. Luego, utiliza una estructura condicional
IF para verificar si es mayor de edad o no. Imprime en consola un mensaje que deje en
claro esto mismo.

const Edad = 20;

if (Edad >= 18) {
    console.log("Tu edad es mayor o igual a 18.");
} else {
    console.log("Eres menor de 18.");
}*/

/*8- Comprobación de número positivo/negativo:
Declara una variable NUMERO con un valor numérico. Utiliza una estructura condicional
ELSE-IF para determinar si el número es positivo, negativo o igual a cero. Muestra un
mensaje en la consola que describa el estado del número.

const numero = 0;

if (numero == 0) {
    console.log("El número es 0");
} else if (numero > 0) {
    console.log("El número es mayor a 0");
} else {
    console.log("El número es menor a 0");
}*/
