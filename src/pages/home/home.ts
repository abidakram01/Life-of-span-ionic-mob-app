import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { SetupPage } from "../setup/setup";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  LoginPage(){
    this.navCtrl.push(LoginPage);
  }
  Setup(){
    this.navCtrl.push(SetupPage);
  }



}
