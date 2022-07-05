class Lru {
  private MAX_SIZE = 2;

  public constructor(private cache: string[]) {
    this.cache = cache;
  }

  public get(index: number): string {
    const data = this.cache[index];
    this.cache.splice(index, 1);

    return data;
  }

  public getCache() {
    return [...this.cache];
  }

  public put(str: string) {
    if (this.cache.length === this.MAX_SIZE) {
      this.cache.shift();
    }

    this.cache.push(str);
  }
}

export default Lru;
