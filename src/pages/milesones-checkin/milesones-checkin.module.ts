import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MilesonesCheckinPage } from './milesones-checkin';

@NgModule({
  declarations: [
    MilesonesCheckinPage,
  ],
  imports: [
    IonicPageModule.forChild(MilesonesCheckinPage),
  ],
})
export class MilesonesCheckinPageModule {}
