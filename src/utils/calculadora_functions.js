export function calcularOperacion (num1, num2, operacion) {
    switch (operacion) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 !== 0 ? num1 / num2 : 'No se puede dividir entre cero';
      default:
        return 'Operación no válida';
    }
};