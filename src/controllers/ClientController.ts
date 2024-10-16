import { Request, Response } from 'express';
import { ClientService } from '../services/ClientService';

export class ClientController {
  constructor(private clientService: ClientService) {}

  async createClient(req: Request, res: Response): Promise<void> {
    try {
      const client = await this.clientService.addClient(req.body);
      res.status(201).json(client);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el cliente' });
    }
  }

  async getClient(req: Request, res: Response): Promise<void> {
    try {
      const client = await this.clientService.getClient(req.params.id);
      if (client) {
        res.json(client);
      } else {
        res.status(404).json({ error: 'Cliente no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el cliente' });
    }
  }
}
