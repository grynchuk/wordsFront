import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TextComponent} from "./components/text/text.component";
import {TextDescriptionComponent} from "./components/textDescription/text-description.component";

const routes: Routes = [
  { path: 'text', component: TextComponent },
  { path: 'text-description', component: TextDescriptionComponent },
  { path: '',   redirectTo: '/text', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
