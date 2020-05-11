import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MilestoneTabPage } from './milestone-tab';

@NgModule({
  declarations: [
    MilestoneTabPage,
  ],
  imports: [
    IonicPageModule.forChild(MilestoneTabPage),
  ],
})
export class MilestoneTabPageModule {}
