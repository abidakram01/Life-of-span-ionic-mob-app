import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from "../pages/login/login";
import { ForgotPasswordPage } from "../pages/forgot-password/forgot-password";
import { SetupPage } from "../pages/setup/setup";
import { AddGoalPage } from "../pages/add-goal/add-goal";
import { AddedPage } from "../pages/added/added";
import { MainMilestonesPage} from "../pages/main-milestones/main-milestones";
import { MilesonesCheckinPage } from "../pages/milesones-checkin/milesones-checkin";
import { MilesonesCheckinFalsePage } from "../pages/milesones-checkin-false/milesones-checkin-false";
import { MilesonesCheckinTruePage } from "../pages/milesones-checkin-true/milesones-checkin-true";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DuedateModalPage } from "../pages/duedate-modal/duedate-modal";
import { AddMilestonesModalPage } from "../pages/add-milestones-modal/add-milestones-modal";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ForgotPasswordPage,
    SetupPage,
    AddGoalPage,
    AddedPage,
    MainMilestonesPage,
    MilesonesCheckinPage,
    MilesonesCheckinFalsePage,
    MilesonesCheckinTruePage,
    DuedateModalPage,
    AddMilestonesModalPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ForgotPasswordPage,
    SetupPage,
    AddGoalPage,
    AddedPage,
    MainMilestonesPage,
    MilesonesCheckinPage,
    MilesonesCheckinFalsePage,
    MilesonesCheckinTruePage,
    DuedateModalPage,
    AddMilestonesModalPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
