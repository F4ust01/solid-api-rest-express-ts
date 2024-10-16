import { IVehicleRepository } from '../repositories/IVehicleRepository';
import { IVehicle } from '../models/IVehicle';

export class VehicleService {
  constructor(private vehicleRepo: IVehicleRepository) {}

  async addVehicle(vehicle: IVehicle): Promise<IVehicle> {
    return await this.vehicleRepo.create(vehicle);
  }

  async getVehicle(id: string): Promise<IVehicle | null> {
    return await this.vehicleRepo.findById(id);
  }

  async updateVehicle(id: string, vehicle: Partial<IVehicle>): Promise<IVehicle | null> {
    return await this.vehicleRepo.update(id, vehicle);
  }

  async deleteVehicle(id: string): Promise<void> {
    await this.vehicleRepo.delete(id);
  }

  // Método para agregar descuentos sin modificar la clase original (extensión de funcionalidad)
  applyDiscount(vehicle: IVehicle, discountPercentage: number): IVehicle {
    const discountedPrice = vehicle.price - (vehicle.price * discountPercentage / 100);
    return { ...vehicle, price: discountedPrice };
  }
}
