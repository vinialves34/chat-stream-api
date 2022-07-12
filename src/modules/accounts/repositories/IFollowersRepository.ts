import { ICreateFollowerDTO } from "../dto/ICreateFollowerDTO";

interface IFollowersRepository {
  create(data: ICreateFollowerDTO): Promise<void>;
}

export { IFollowersRepository };
