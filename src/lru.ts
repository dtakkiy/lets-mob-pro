class Lru {
  private MAX_SIZE = 2;

  constructor(private cache: string[]) {}

  public get(index: number): string {
    const data = this.cache[index];

    this.cache.splice(index, 1);

    return data;
  }

  public put(str: string) {
    if (this.cache.length === this.MAX_SIZE) {
      this.cache.shift();
    }

    this.cache.push(str);
  }
}

const lruCache = new Lru([]);
lruCache.put('praha');
lruCache.put('airtable');
console.log(lruCache);
lruCache.put('matsubara');
console.log(lruCache);
