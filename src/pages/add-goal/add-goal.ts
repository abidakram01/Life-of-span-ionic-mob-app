import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddedPage } from "../added/added";
import { MainMilestonesPage } from "../main-milestones/main-milestones";
import { AddMilestonesModalPage } from "../add-milestones-modal/add-milestones-modal";

/**
 * Generated class for the AddGoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-goal',
  templateUrl: 'add-goal.html',
})
export class AddGoalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  AddedPage(){
    this.navCtrl.push(AddedPage);
  }

  MainMilestones(){
    this.navCtrl.push(MainMilestonesPage)
  }

  AddMilestonesModalPage(){
    //let modal = this.modalCtrl.create(AddMilestonesModalPage);

    let modal = this.modalCtrl.create(AddMilestonesModalPage, undefined, { cssClass: "modal-fullscreen" });
    modal.present();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddGoalPage');
  }

}
