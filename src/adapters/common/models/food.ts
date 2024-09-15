//Domain Model for Persistence

export class Food {
  constructor(
    public vandorId: string,
    public name: string,
    public description: string,
    public category: string,
    public foodType: string,
    public readyTime: number,
    public price: number,
    public rating: number,
    public images: [string],
  ) {}
}
