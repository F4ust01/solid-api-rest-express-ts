import { IClientRepository } from '../repositories/IClientRepository';
import { IClient } from '../models/IClient';

export class ClientService {
  constructor(private clientRepo: IClientRepository) {}

  async addClient(client: IClient): Promise<IClient> {
    return await this.clientRepo.create(client);
  }

  async getClient(id: string): Promise<IClient | null> {
    return await this.clientRepo.findById(id);
  }
}
