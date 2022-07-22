class Filter {
  public constructor(
    private ngWords: string[],
    private filterText: string = '<censored>'
  ) {
    this.ngWords = ngWords;
    this.filterText = filterText;
  }

  public detect(tweet: string): boolean {
    return this.ngWords.filter((word) => tweet.includes(word)).length > 0;
  }

  public censor(tweet: string): string {
    if (!this.detect(tweet)) {
      return tweet;
    }

    return this.ngWords.reduce(
      (prev, ngWord) => prev.replace(ngWord, this.filterText),
      tweet
    );
  }
}

export default Filter;
