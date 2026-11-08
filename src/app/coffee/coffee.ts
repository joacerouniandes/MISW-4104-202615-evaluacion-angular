export class Coffee {
  constructor(
    public id: number,
    public tipo: "Blend" | "Café de Origen",
    public region: string,
    public sabor: string,
    public altura: number,
    public imagen: string
  ) {}
}
