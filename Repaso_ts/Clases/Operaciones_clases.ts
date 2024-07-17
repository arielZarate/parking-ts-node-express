class Operaciones {
  constructor() {}

  suma(n1: number, n2: number): number {
    return n1 + n2;
  }

  resta(n1: number, n2: number): number {
    return n1 - n2;
  }

  dividir(n1: number, n2: number): number | string {
    if (n2 === null || n2 === undefined || n2 === 0) {
      return "Error: División por cero";
    } else {
      return n1 / n2;
    }
  }

  multiplicar(n1: number, n2: number): number {
    return n1 * n2;
  }
}

const readline = require("readline");
const operaciones = new Operaciones();

function ejecutarOperaciones() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Ingrese el primer número: ", (string1: any) => {
    rl.question("Ingrese el segundo número: ", (string2: any) => {
      let n1: number = parseFloat(string1);
      let n2: number = parseFloat(string2);

      if (isNaN(n1) || isNaN(n2)) {
        console.log(
          "Debe ingresar números válidos para realizar las operaciones."
        );
        rl.close();
        return;
      }

      console.log(`Suma: ${operaciones.suma(n1, n2)}`);
      console.log(`Resta: ${operaciones.resta(n1, n2)}`);
      console.log(`Multiplicación: ${operaciones.multiplicar(n1, n2)}`);
      const resultadoDivision = operaciones.dividir(n1, n2);
      if (typeof resultadoDivision === "number") {
        console.log(`División: ${resultadoDivision}`);
      } else {
        console.log(resultadoDivision);
      }

      rl.close();
    });
  });
}

ejecutarOperaciones();
