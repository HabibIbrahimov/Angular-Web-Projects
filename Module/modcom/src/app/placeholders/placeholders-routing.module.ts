import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlaceholdersHomeComponent} from './placeholders-home/placeholders-home.component';

const routes: Routes = [
  {path:'',component:PlaceholdersHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceholdersRoutingModule { }
