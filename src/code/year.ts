class MyYear {
  public constructor(private readonly year: number) {}

  public toString(): string {
    return this.year.toString();
  }

  public isLeap(): boolean {
    return this.year % 4 === 0;
  }
}

const myYear = new MyYear(2022);
console.log(`${myYear.toString()}`);
console.log(`${myYear.isLeap()}`);

const myYear2023 = new MyYear(2023);
console.log(`${myYear2023.toString()}`);
console.log(`${myYear2023.isLeap()}`);

const myYear2024 = new MyYear(2024);
console.log(`${myYear2024.toString()}`);
console.log(`${myYear2024.isLeap()}`);

const myYear2025 = new MyYear(2025);
console.log(`${myYear2025.toString()}`);
console.log(`${myYear2025.isLeap()}`);
