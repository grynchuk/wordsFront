import {Deserializer} from "../../types";

export interface rawWard {
  word: string;
  count: number;
}


export class Word implements Deserializer {

  private word: string = ''
  private count: number = 0;
  private stars: number = 0;

  deserialize(input: rawWard): Deserializer {

    if (
      !('word' in input)
      || !('count' in input)
    ) {
      throw Error('Invalid configuration')
    }

    return this.setWord(input.word)
      .setCount(input.count);
  }


  private setWord(word: string): this {
    this.word = word;
    return this;
  }

  public getWord():string {
    return this.word;
  }

  public  getCount(): number {
    return this.count;
  }

  private setCount(count: number): this {
    this.count = count;
    return this;
  }

  public getStars(): number
  {
    return this.stars;
  }

  public setStars(stars: number): this
  {
    this.stars = stars;
    return this;
  }

  serialize(): Object {
    return {
      'word': this.word,
      'count': this.count,
    };
  }
}
