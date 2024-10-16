import { Router } from 'express';
import { ClientController } from '../controllers/ClientController';
import { MongoClientRepository } from '../repositories/MongoClientRepository';
import { ClientService } from '../services/ClientService';

const router = Router();
const clientRepo = new MongoClientRepository();
const clientService = new ClientService(clientRepo);
const clientController = new ClientController(clientService);

router.post('/', (req, res) => clientController.createClient(req, res));
router.get('/:id', (req, res) => clientController.getClient(req, res));

export default router;
