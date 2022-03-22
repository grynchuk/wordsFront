import {Deserializer} from "../../types";
import {rawWard, Word} from "../word/word";


export interface rawText {
  text: string;
  words: Set<Word>;
}

export class Text implements Deserializer{

  private text: string = '';
  private words: Set<Word|Deserializer> = new Set();

  deserialize(inp: rawText): Deserializer {

    if (
      !('text' in inp)
      || !('words' in inp)
    ) {
      throw new Error('Invalid word config');
    }

    return this.setText(inp.text).setWords(inp.words);
  }

  public setText(text: string): this {
    this.text = text;
    return this;
  }

  public getText(): string {
    return this.text;
  }

  public  setWords(words: Set<Word> | []): this
  {
    if (words instanceof Set) {
      this.words = words;
    } else {
      this.words = new Set(words.map((rawWard: rawWard) => new Word().deserialize(rawWard)) )
    }
    return this;
  }

  public getWords(): Set<Word|Deserializer>
  {
    return this.words;
  }

  serialize(): Object {
    return {
      text: this.text,
      words: this.words,
    };
  }
}
