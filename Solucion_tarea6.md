# Tarea #6

## Autor
1. Luis German Henao Ortiz

## Ejercicio 1
Escribe el código...

```javascript
nombre = prompt("Ingrese su nombre: ");
console.log(`Ahora estas en la matriz, ${nombre}`);
```

![I1](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%201.png)

## Ejercicio 2

```javascript
primerNumero = prompt("Ingrese un número decimal: ");
segundoNumero = prompt("Ingrese un número entero: ");
suma = parseFloat(primerNumero) + parseInt(segundoNumero);
console.log(`El resultado de la suma es ${suma}`);

```

![I2](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%202.png)

## Ejercicio 3

```javascript
numeroUno = prompt("Ingrese un número: ");
numeroDos = prompt("Ingrese otro número: ");
sum = parseFloat(numeroUno) + parseFloat(numeroDos);
console.log(`El resultado de la suma es ${sum}`);
numeroTres = prompt("Ingrese el numero número: ");
multiplicacion = sum * numeroTres;
console.log(`EL resultado de la multiplicación es ${multiplicacion}`);

```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%203.png)

## Ejercicio 4

```javascript
kilometers = prompt("Kilómetros recorridos: ");
gasoline = prompt("Litros de gasolina usados: ");
consumo = kilometers/gasoline;
console.log(`El consumo por kilometro es de ${consumo} Km/L`);

```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%204.png)

## Ejercicio 5

```javascript
farenheit = prompt("Ingrese una temperatura en Farenheit: ");
celsius = (5/9)*(farenheit-32);
console.log(`La temperatura en Celsius es ${celsius}°C`);
```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%205.png)

## Ejercicio 6

```javascript
var numberOne = prompt("Ingrese el primer número: ");
var numberTwo = prompt("Ingrese el segundo número: ");
var numberThree = prompt("Ingrese el tercer número: ");
sumProm = (parseFloat(numberOne) + parseFloat(numberTwo) + parseFloat(numberThree))/3;
console.log(`El promedio de los tres números es ${sumProm}`);
```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%206.png)

## Ejercicio 7

```javascript
newNumber = prompt("Ingrese un número: ");
percent = newNumber - (newNumber*0.15);
console.log(`El nuevo número sin el 15% es ${percent}`);
```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%207.png)

## Ejercicio 8

```javascript
palabraUno = prompt("Ingrese una palabra: ");
palabraDos = prompt("Ingrese otra palabra: ");
console.log(`${palabraUno} ${palabraDos}`);
```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%208.png)

## Ejercicio 9

```javascript
text = prompt("Ingrese un texto: ");
console.log(text.charAt());
position = prompt("Ingrese la posicion deseada en numero entero: ");
console.log(`El caracter de esa posicion es ${text.charAt(position)}`);
console.log(text);
```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%209.png)

## Ejercicio 10

```javascript
showsTv = prompt("Ingrese cuantos shows ha visto en el ultimo año: ");
if (showsTv > 3) {
	console.log(true);
	console.log(showsTv);
}
else {
	console.log(false);
	console.log(showsTv);
}
```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%2010.png)

## Ejercicio 11

```javascript
fecha = parseInt(prompt("Ingrese la fecha en DDMMAAAA: "));
fechaChange = fecha.toString();
console.log(fecha);
console.log(fechaChange.replace(/^(\d{2})(\d{2})(\d{4})$/g,'$1/$2/$3'));
```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%2011.png)

## Ejercicio 12

```javascript
writeNumber = prompt("Ingrese un numero: ");
console.log(writeNumber);
if (writeNumber%2 == 0) {
	console.log(true);
}
else {
	console.log(false);
}
```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%2012.png)

## Ejercicio 13

```javascript
edad = prompt("Ingrese su edad: ");
articulos = prompt("Numero de articulos comprados: ");
if (edad >= 18 && articulos > 1) {
	console.log(edad);
	console.log(articulos);
	console.log(true);
}
else {
	console.log(edad);
	console.log(articulos);
	console.log(false);
}
```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%2013.png)

## Ejercicio 14

```javascript
frase = prompt("Ingrese una frase: ");
contarCaracteres = frase.length;
console.log(frase);
if(contarCaracteres%2 == 0){
	console.log(false);
}
else{
	console.log(true);
}
```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%2014.png)

## Ejercicio 15

```javascript
palabraOne = prompt("Ingrese una palabra: ");
palabraTwo = prompt("Ingrese otra palabra: ");
console.log("Palabra uno: "+palabraOne);
console.log("Palabra dos: "+palabraTwo);
contarPalOne = palabraOne.length;
contarPalTwo = palabraTwo.length;
if(contarPalOne < contarPalTwo){
	console.log(true);
}
else{
	console.log(false);
}
```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%2015.png)

## Ejercicio 16

```javascript
nombreUno = prompt("Ingrese su nombre: ");
nombreDos = prompt("Ingrese otro nombre: ");
primLetUno = nombreUno.charAt(0);
primLetUnoDos = nombreUno.substr(-1);
primLetDos = nombreDos.charAt(0);
primLetDosDos = nombreDos.substr(-1);
console.log(nombreUno);
console.log(nombreDos);
if(primLetUno == primLetDos || primLetUnoDos == primLetDosDos){
	console.log(true);
}
else{
	console.log(false);
}
```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%2016.png)

## Ejercicio 17

```javascript
numeroAbs = prompt("Ingrese un numero entero: ");
console.log(numeroAbs);
if(numeroAbs < 0){
	numeroNuevo = numeroAbs*-1;
	console.log(numeroNuevo);
}
else{
	console.log(numeroAbs);
}
```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%2017.png)

## Ejercicio 18

```javascript
numUno = prompt("Ingrese un numero: ");
numDos = prompt("Ingrese otro numero: ");
console.log(numUno);
console.log(numDos);
if(numUno > numDos){
	console.log(numUno +" es mayor");
}
else if(numUno == numDos){
	console.log("Ambos numeros son iguales");
}
else{
	console.log(numDos + " es mayor");
}
```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%2018.png)

## Ejercicio 19

```javascript
letra = prompt("Ingrese una letra: ");
contarLetra = letra.length;
while(contarLetra > 1){
	console.log("No se puede procesar");
	letra = prompt("Ingrese de nuevo la letra: ");
	break;
}
if(letra == "a" || letra == "e" || letra == "i" || letra == "0" || letra == "u"){
	console.log(letra);
	console.log("Es una vocal");
}
else{
	console.log(letra);
	console.log("No es vocal");
}
```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%2019.png)

## Ejercicio 20

```javascript
numOne = prompt("Ingrese un numero: ");
numTwo = prompt("Ingrese otra palabra: ");
numThree = prompt("Ingrese otro numero mas: ");
console.log(numOne);
console.log(numTwo);
console.log(numThree);
if(numOne > numTwo && numOne > numThree){
	console.log(numOne+ " es mayor");
}
else if(numTwo > numOne && numTwo > numThree){
	console.log(numTwo + " es mayor");
}
else{
	console.log(numThree + " es mayor");
}
```

![I3](https://github.com/Ruisu4869/Tarea6-JS/blob/master/Exercise%2020.png)