type Result = {
  key: string;
  value: string;
};

export default class FileStore {
  public constructor(private results: Result[]) {
    this.results = results;
  }

  public set(key: string, value: string): boolean {
    if (key === null || key.length === 0) return false;
    this.results.push({ key, value });
    return true;
  }

  public get(key: string): string {
    const index = this.results.findIndex((elm) => elm.key === key);
    return this.results[index].value;
  }

  public dump(): string {
    const array = [...this.results];
    return array.reduce(
      (prev, current) => `${prev}${current.key}:${current.value}\n`,
      ''
    );
  }
}
