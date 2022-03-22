import { Component, OnInit } from '@angular/core';
import {TextService} from "../../services/text/text.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {

  public form: FormGroup;

  constructor(
    private textService: TextService,
    private router: Router
  ) {
    this.form = new FormGroup({
      text: new FormControl(
        '',
        Validators.required
      )
    })
  }

  public addText(): void
  {
    if (!this.form.valid) {
      return;
    }

    this.textService.addText(this.form.get('text')?.value).subscribe(
      () => {
        this.router.navigate(['text-description'] );
      }
    )
  }



}
