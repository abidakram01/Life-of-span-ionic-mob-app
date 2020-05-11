import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DuedateModalPage } from './duedate-modal';

@NgModule({
  declarations: [
    DuedateModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DuedateModalPage),
  ],
})
export class DuedateModalPageModule {}
