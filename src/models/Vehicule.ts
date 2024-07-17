// vehicule.ts

enum TypeVehicule {
  CAR = "CAR",
  BIKE = "BIKE",
  MOTORCYCLE = "MOTORCYCLE",
  BUS = "BUS",
  OTHER = "OTHER",
}

export interface Vehicule {
  id?: number;
  type_vehicule: TypeVehicule;
  color: string;
  patente: string;
  brand: string; // marca
  createdAt?: Date; // se generan solos en la bd
  updatedAt?: Date; // se generan solos en la bd
}
