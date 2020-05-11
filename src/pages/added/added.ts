import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import {AddGoalPage} from "../add-goal/add-goal";

/**
 * Generated class for the AddedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-added',
  templateUrl: 'added.html',
})
export class AddedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  GoalAddedAlert() {
    const alert = this.alertCtrl.create({
      title: 'When would you like to achieve this milestone?',
      buttons: ['Set date'],
      cssClass: 'alertCustomCss'
    });
    alert.present();
  }

  AddGoalPage(){
    this.navCtrl.push(AddGoalPage)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddedPage');
  }

}
