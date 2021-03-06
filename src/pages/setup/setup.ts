import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddGoalPage } from "../add-goal/add-goal";

/**
 * Generated class for the SetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html',
})
export class SetupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  AddGoalPage(){
    this.navCtrl.push(AddGoalPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupPage');
  }

}
