interface INombre {
  nombre: string;
}

interface IApellido {
  apellido: string;
}

interface IEdad {
  dni: number;
}

interface IPersona {
  nombre: string;
  apellido: string;
  edad: number;
}

//reemplaza al module.exports={}
export { IPersona, IEdad, IApellido, INombre };
