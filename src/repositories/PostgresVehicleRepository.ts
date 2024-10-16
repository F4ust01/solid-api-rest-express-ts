import { IVehicleRepository } from './IVehicleRepository';
import { IVehicle } from '../models/IVehicle';

export class PostgresVehicleRepository implements IVehicleRepository {
  async create(vehicle: IVehicle): Promise<IVehicle> {
    // Simulación de inserción en PostgreSQL
    return vehicle;
  }

  async findById(id: string): Promise<IVehicle | null> {
    // Simulación de búsqueda en PostgreSQL
    return null;
  }

  async update(id: string, vehicle: Partial<IVehicle>): Promise<IVehicle | null> {
    // Simulación de actualización en PostgreSQL
    return null;
  }

  async delete(id: string): Promise<void> {
    // Simulación de eliminación en PostgreSQL
  }
}
