export class UniqueEntityID {
  constructor(id: string | string) {
    if (!id) {
      throw new Error('UniqueEntityID must have a non null value');
    }
  }
}
