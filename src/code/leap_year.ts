class LeapYear {
  public constructor(private readonly year: number) {
    this.validate(year);
    this.year = year;
  }

  private validate(year: number) {
    if (year < 0) {
      throw new Error('指定した年がマイナス');
    }
  }

  public toString(): string {
    return this.year.toString();
  }

  public isLeap(): boolean {
    return this.year % 4 === 0;
  }
}

export default LeapYear;
