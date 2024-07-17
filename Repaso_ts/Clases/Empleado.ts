const Person = require("./Persona");

class Empleado extends Person {
  private legajo: string;
  private puesto: string;
  private sueldo: number;

  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    legajo: string,
    puesto: string,
    sueldo: number
  ) {
    //super constructor
    super(nombre, apellido, edad);

    this.legajo = legajo;
    this.puesto = puesto;
    this.sueldo = sueldo;
  }

  // getters y setters

  public getLegajo(): string {
    return this.legajo;
  }

  public setLegajo(legajo: string): void {
    this.legajo = legajo;
  }
  public getPuesto(): string {
    return this.puesto;
  }
  public setPuesto(puesto: string): void {
    this.puesto = puesto;
  }
  public getSueldo(): number {
    return this.sueldo;
  }
  public setSueldo(sueldo: number): void {
    this.sueldo = sueldo;
  }

  public toString(): string {
    return `Empleado: ${this.getNombre()}, ${
      this.apellido
    }, ${this.getEdad()}, Legajo: ${this.legajo}, Puesto: ${
      this.puesto
    }, Sueldo: ${this.sueldo}`;
  }
}

/**
 * 
 let empleado = new Empleado(
  "Juan",
  "Pérez",
  30,
  "123456",
  "Desarrollador",
  5000
);
 */

let empleado = new Empleado(
  "Rocio",
  "Vargas",
  31,
  "1254",
  "Desarrollador",
  12000000
);
console.log(empleado.toString());

//ejecutar usando npx ts-node  src/backup/Clases/Empleado.ts
