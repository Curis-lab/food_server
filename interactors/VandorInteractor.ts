export class VandorInteractor {
  private repository;
  constructor(repository: any) {
    this.repository = repository;
  }
  async findVandor(id: string | undefined, email?: string) {
    if (email) {
      return await this.repository.findVandorByEmail(email);
    } else {
      return await this.repository.findVandorById(id);
    }
  }
}
