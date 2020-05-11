import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoalsTabPage } from './goals-tab';

@NgModule({
  declarations: [
    GoalsTabPage,
  ],
  imports: [
    IonicPageModule.forChild(GoalsTabPage),
  ],
})
export class GoalsTabPageModule {}
