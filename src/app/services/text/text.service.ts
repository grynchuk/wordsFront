import {Injectable} from '@angular/core';
import {HttpService} from "../http/http.service";
import {map, Observable} from "rxjs";
import {rawText, Text} from "../../models/text/text";
import {Deserializer} from "../../types";
import {Word} from "../../models/word/word";

@Injectable({
  providedIn: 'root'
})
export class TextService {
  constructor(
    private httpService: HttpService
  ) {
  }

  public getText(): Observable<Deserializer> {
    return this.httpService.get('text')
      .pipe(
        map((data: rawText) => {
          let text = new Text().deserialize(data)
          let num = 3;
          // @ts-ignore
          text.getWords().forEach( (word: Word) => {
              word.setStars(num);
              num =  num > 0 ? num - 1 : 0;
          });

          return text;
        }),
      )
  }

  public addText(text: string): Observable<any> {
    return this.httpService.post(
      'text',
      {'text': text}
    );
  }
}
