import { IVehicleRepository } from './IVehicleRepository';
import { IVehicle } from '../models/IVehicle';

export class MongoVehicleRepository implements IVehicleRepository {
  private vehicles: IVehicle[] = []; // Simulación de una colección de vehículos

  async create(vehicle: IVehicle): Promise<IVehicle> {
    this.vehicles.push(vehicle); // Agrega el vehículo a la lista simulada
    return vehicle;
  }

  async findById(id: string): Promise<IVehicle | null> {
    const vehicle = this.vehicles.find(v => v.id === id); // Busca el vehículo por ID
    return vehicle || null; // Devuelve el vehículo encontrado o null si no existe
  }

  async update(id: string, vehicle: Partial<IVehicle>): Promise<IVehicle | null> {
    const index = this.vehicles.findIndex(v => v.id === id);
    if (index === -1) return null;

    // Actualiza solo las propiedades que se proporcionan
    this.vehicles[index] = { ...this.vehicles[index], ...vehicle };
    return this.vehicles[index];
  }

  async delete(id: string): Promise<void> {
    this.vehicles = this.vehicles.filter(v => v.id !== id); // Elimina el vehículo por ID
  }
}
