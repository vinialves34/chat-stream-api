import { Stream } from "../entities/Stream";

interface IStreamRepository {
  findById(id: string): Promise<Stream>;
}

export { IStreamRepository };
