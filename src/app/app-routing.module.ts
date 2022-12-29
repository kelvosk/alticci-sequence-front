import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SequenceComponent } from './sequence/sequence.component';

const routes: Routes = [
  { path: '', component: SequenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
