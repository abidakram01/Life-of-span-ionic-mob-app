import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MilesonesCheckinPage } from "../milesones-checkin/milesones-checkin";

/**
 * Generated class for the MainMilestonesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-milestones',
  templateUrl: 'main-milestones.html',
})
export class MainMilestonesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  MilesonesCheckinPage(){
    this.navCtrl.push(MilesonesCheckinPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainMilestonesPage');
  }

}
