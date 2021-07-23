// Durante este taller aprendimos a calcular el área y perímetro de un triángulo conociendo la longitud de sus 3 lados y también su altura.

// En este ejercicio debes crear una función para **calcular la altura de un triángulo isósceles**.

// - La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
// - La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
// - La función debe retornar la altura del triángulo.

// > Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.

// h = sqr(a^2-(b^2/4))

var lado1, lado2, lado3;

function alturaTriangulo(lado1, lado2, lado3){
    var isoceles = false;
    var a,b;
    var altura = 0;

    if (lado1 == lado2 && lado1 != lado3){
        isoceles = true;
        a = lado1;
        b = lado3;
    } else if (lado1 == lado3 && lado1 != lado2) {
        isoceles = true;
        a = lado1;
        b = lado2;
    } else if (lado2 == lado3 && lado2 != lado1) {
        isoceles = true;
        a = lado2;
        b = lado1;
    } else {
        isoceles = false;
    }

    if (isoceles){
        altura = Math.sqrt(Math.pow(a, 2)-(Math.pow(b, 2)/4));
        return console.log("La altura de tu triámgulo es: " + altura);
    } else {
        console.log("Lo siento pero tu triángulo no es isósceles");
    }
}

lado1 = parseFloat(prompt("Digita la medida del lado 1 de tu triángulo"));
lado2 = parseFloat(prompt("Digita la medida del lado 2 de tu triángulo"));
lado3 = parseFloat(prompt("Digita la medida del lado 3 de tu triángulo"));

alturaTriangulo(lado1, lado2, lado3);