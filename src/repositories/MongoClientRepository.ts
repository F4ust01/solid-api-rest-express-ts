import { IClientRepository } from './IClientRepository';
import { IClient } from '../models/IClient';

export class MongoClientRepository implements IClientRepository {
  async create(client: IClient): Promise<IClient> {
    // Simulación de inserción en MongoDB
    return client;
  }

  async findById(id: string): Promise<IClient | null> {
    // Simulación de búsqueda en MongoDB
    return null;
  }

  async update(id: string, client: Partial<IClient>): Promise<IClient | null> {
    // Simulación de actualización en MongoDB
    return null;
  }

  async delete(id: string): Promise<void> {
    // Simulación de eliminación en MongoDB
  }
}
