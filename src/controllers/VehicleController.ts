import { Request, Response } from 'express';
import { VehicleService } from '../services/VehicleService';

export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  async createVehicle(req: Request, res: Response): Promise<void> {
    try {
      const vehicle = await this.vehicleService.addVehicle(req.body);
      res.status(201).json(vehicle);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el vehículo' });
    }
  }

  async getVehicle(req: Request, res: Response): Promise<void> {
    try {
      const vehicle = await this.vehicleService.getVehicle(req.params.id);
      if (vehicle) {
        res.json(vehicle);
      } else {
        res.status(404).json({ error: 'Vehículo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el vehículo' });
    }
  }
}
