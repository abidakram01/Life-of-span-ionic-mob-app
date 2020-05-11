import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddedPage } from './added';

@NgModule({
  declarations: [
    AddedPage,
  ],
  imports: [
    IonicPageModule.forChild(AddedPage),
  ],
})
export class AddedPageModule {}
