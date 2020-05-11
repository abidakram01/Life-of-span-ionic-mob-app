import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainMilestonesPage } from './main-milestones';

@NgModule({
  declarations: [
    MainMilestonesPage,
  ],
  imports: [
    IonicPageModule.forChild(MainMilestonesPage),
  ],
})
export class MainMilestonesPageModule {}
