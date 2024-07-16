// Calculadora simple en JavaScript

class Calculadora {
    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) {
            console.log("No se puede dividir por cero.");
            return null;
        }
        return a / b;
    }
}

// Uso de la calculadora
const calculadora = new Calculadora();

console.log("Suma de 5 + 3:", calculadora.sumar(5, 3));
console.log("Resta de 5 - 3:", calculadora.restar(5, 3));
console.log("Multiplicación de 5 * 3:", calculadora.multiplicar(5, 3));
console.log("División de 5 / 3:", calculadora.dividir(5, 3));
console.log("Intento de división por cero:", calculadora.dividir(5, 0));