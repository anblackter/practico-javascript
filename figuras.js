//Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado);
console.groupEnd();

//Código del triángulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triángulo miden: "
+ ladoTriangulo1
+ "cm, "
+ ladoTriangulo2
+ "cm, ",
+ baseTriangulo
+ "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + " cm^2");

console.groupEnd();

//Código del círculo
console.group("Círculos");
const radioCirculo = 4;
const diametroCirculo = 2 * radioCirculo;
const PI = Math.PI;
const perimetroCirculo = PI * diametroCirculo;
const areaCirculo = PI * radioCirculo * radioCirculo;

console.log("PI es: " + PI + " cm");
console.log("El diámetro del círculo es: " + diametroCirculo + " cm");
console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");
console.log("El área del círculo es: " + areaCirculo + " cm^2");

console.groupEnd();