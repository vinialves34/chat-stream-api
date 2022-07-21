import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database/config/app-data-source";
import { Stream } from "../../entities/Stream";
import { IStreamRepository } from "../IStreamRepository";

class StreamRepository implements IStreamRepository {
  private repository: Repository<Stream>;

  constructor() {
    this.repository = AppDataSource.getRepository(Stream);
  }

  async findById(id: string): Promise<Stream> {
    const stream = await this.repository.findOne(id);

    return stream;
  }
}

export { StreamRepository };
