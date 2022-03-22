import { Component, OnInit } from '@angular/core';
import {TextService} from "../../services/text/text.service";
import {Observable} from "rxjs";
import {Text} from "../../models/text/text";
import {Deserializer} from "../../types";

@Component({
  selector: 'app-text-description',
  templateUrl: './text-description.component.html',
  styleUrls: ['./text-description.component.css']
})
export class TextDescriptionComponent implements OnInit {

  // @ts-ignore
  public text$: Observable<Tex|Deserializer>;
  public readonly starsDesc = new Map <number, string> ([
    [3, '***'],
    [2, '**'],
    [1, '*'],
    [0, '-'],
  ]);


  constructor(
    private textService: TextService
  ) { }

  ngOnInit(): void {
    this.text$ = this.textService.getText();
  }

}
