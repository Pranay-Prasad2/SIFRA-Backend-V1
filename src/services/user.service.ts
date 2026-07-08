import { UserRepository } from "../repositories/user.repository.js";
import { NotFoundError } from "../shared/errors/NotFoundError.js";

export class UserService {
  private repository = new UserRepository();

  async create(data: any) {
    return this.repository.create(data);
  }

  async getAll() {
    return this.repository.findAll();
  }

  async getById(id: string) {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    return user;
  }

  async update(id: string, data: any) {
    await this.getById(id);

    return this.repository.update(id, data);
  }

  async delete(id: string) {
    await this.getById(id);

    return this.repository.delete(id);
  }
}