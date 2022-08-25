function calc() {
      const num1 = parseFloat(prompt("Digite o primeiro valor: "));
      const num2 = parseFloat(prompt("Digite o segundo valor: "));
      const operador = prompt("Operador(+ - * /):");
      console.log(num1, num2, operador)

      try {
            if (num2 === 0 && operador === '/') {
                  throw "Divisão por 0"
            } else if (isNaN(num1) || isNaN(num2) || (num1 == NaN || num2 == NaN)) throw "Dado inválido"
      } catch (error) {
            alert("Erro: " + error)
      }
      switch (operador) {
            case '+':
                  return alert(num1 + num2)
                  break;
            case '-':
                  return alert(num1 - num2)
            case '*':
                  return alert(num1 * num2)
            case '/':
                  return alert(num1 / num2)
            default:
                  return alert("Operador inválido")
      }
}

calc()