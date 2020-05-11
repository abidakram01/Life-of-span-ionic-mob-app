import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMilestonesModalPage } from './add-milestones-modal';

@NgModule({
  declarations: [
    AddMilestonesModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMilestonesModalPage),
  ],
})
export class AddMilestonesModalPageModule {}
