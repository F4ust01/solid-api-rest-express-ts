import express, { Application } from 'express';
import vehicleRoutes from './routes/vehicleRoutes';
import clientRoutes from './routes/clientRoutes';

class Server {
  private app: Application;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/vehicles', vehicleRoutes);
    this.app.use('/clients', clientRoutes);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

const server = new Server(3000);
server.listen();
