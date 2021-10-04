//ejercicio 1
nombre = prompt("Ingrese su nombre: ");
console.log(`Ahora estas en la matriz, ${nombre}`);

//ejercicio 2
primerNumero = prompt("Ingrese un número decimal: ");
segundoNumero = prompt("Ingrese un número entero: ");
suma = parseFloat(primerNumero) + parseInt(segundoNumero);
console.log(`El resultado de la suma es ${suma}`);

//ejercicio 3
numeroUno = prompt("Ingrese un número: ");
numeroDos = prompt("Ingrese otro número: ");
sum = parseFloat(numeroUno) + parseFloat(numeroDos);
console.log(`El resultado de la suma es ${sum}`);
numeroTres = prompt("Ingrese el numero número: ");
multiplicacion = sum * numeroTres;
console.log(`EL resultado de la multiplicación es ${multiplicacion}`);

//ejercicio 4
kilometers = prompt("Kilómetros recorridos: ");
gasoline = prompt("Litros de gasolina usados: ");
consumo = kilometers/gasoline;
console.log(`El consumo por kilometro es de ${consumo} Km/L`);

//ejercicio 5
farenheit = prompt("Ingrese una temperatura en Farenheit: ");
celsius = (5/9)*(farenheit-32);
console.log(`La temperatura en Celsius es ${celsius}°C`);

//ejercicio 6
var numberOne = prompt("Ingrese el primer número: ");
var numberTwo = prompt("Ingrese el segundo número: ");
var numberThree = prompt("Ingrese el tercer número: ");
sumProm = (parseFloat(numberOne) + parseFloat(numberTwo) + parseFloat(numberThree))/3;
console.log(`El promedio de los tres números es ${sumProm}`);

//ejercicio 7
newNumber = prompt("Ingrese un número: ");
percent = newNumber - (newNumber*0.15);
console.log(`El nuevo número sin el 15% es ${percent}`);

//ejercicio 8
palabraUno = prompt("Ingrese una palabra: ");
palabraDos = prompt("Ingrese otra palabra: ");
console.log(`${palabraUno} ${palabraDos}`);

//ejercicio 9
text = prompt("Ingrese un texto: ");
console.log(text.charAt());
position = prompt("Ingrese la posicion deseada en numero entero: ");
console.log(`El caracter de esa posicion es ${text.charAt(position)}`);
console.log(text);

//ejercicio 10
showsTv = prompt("Ingrese cuantos shows ha visto en el ultimo año: ");
if (showsTv > 3) {
	console.log(true);
	console.log(showsTv);
}
else {
	console.log(false);
	console.log(showsTv);
}

//ejercicio 11
fecha = parseInt(prompt("Ingrese la fecha en DDMMAAAA: "));
fechaChange = fecha.toString();
console.log(fecha);
console.log(fechaChange.replace(/^(\d{2})(\d{2})(\d{4})$/g,'$1/$2/$3'));

//ejercicio 12
writeNumber = prompt("Ingrese un numero: ");
console.log(writeNumber);
if (writeNumber%2 == 0) {
	console.log(true);
}
else {
	console.log(false);
}

//ejercicio 13
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

//ejercicio 14
frase = prompt("Ingrese una frase: ");
contarCaracteres = frase.length;
console.log(frase);
if(contarCaracteres%2 == 0){
	console.log(false);
}
else{
	console.log(true);
}

//ejercicio 15
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

//ejercicio 16
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

//ejercicio 17
numeroAbs = prompt("Ingrese un numero entero: ");
console.log(numeroAbs);
if(numeroAbs < 0){
	numeroNuevo = numeroAbs*-1;
	console.log(numeroNuevo);
}
else{
	console.log(numeroAbs);
}

//ejercicio 18
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

//ejercicio 19
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

//ejercicio 20
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