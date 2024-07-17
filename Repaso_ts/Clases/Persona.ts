class Persona {
  nombre: string;
  apellido: string;
  edad: number;

  constructor(nombre: string, apellido: string, edad: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  // Métodos para acceder y modificar los atributos (getters y setters)

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getApellido(): string {
    return this.apellido;
  }

  public setApellido(apellido: string): void {
    this.apellido = apellido;
  }

  public getEdad(): number {
    return this.edad;
  }

  public setEdad(edad: number): void {
    this.edad = edad;
  }
}

//export default Persona
module.exports = Persona;
