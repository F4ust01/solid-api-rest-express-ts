import { Router } from 'express';
import { VehicleController } from '../controllers/VehicleController';
import { MongoVehicleRepository } from '../repositories/MongoVehicleRepository';
import { VehicleService } from '../services/VehicleService';

const router = Router();
const vehicleRepo = new MongoVehicleRepository();
const vehicleService = new VehicleService(vehicleRepo);
const vehicleController = new VehicleController(vehicleService);

router.post('/', (req, res) => vehicleController.createVehicle(req, res));

export default router;
