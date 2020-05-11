import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MilesonesCheckinFalsePage} from "../milesones-checkin-false/milesones-checkin-false";
import { MilesonesCheckinTruePage } from "../milesones-checkin-true/milesones-checkin-true";

/**
 * Generated class for the MilesonesCheckinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-milesones-checkin',
  templateUrl: 'milesones-checkin.html',
})
export class MilesonesCheckinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  MilesonesCheckinFalsePage(){
    this.navCtrl.push(MilesonesCheckinFalsePage)
  }

  MilesonesCheckinTruePage(){
    this.navCtrl.push(MilesonesCheckinTruePage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MilesonesCheckinPage');
  }

}
