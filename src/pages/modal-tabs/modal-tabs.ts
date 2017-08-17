import { Component } from '@angular/core';
import {IonicPage, NavController, ViewController} from 'ionic-angular';
import {TabOnePage} from "../tab-one/tab-one";
import {TabTwoPage} from "../tab-two/tab-two";
import {TabThreePage} from "../tab-three/tab-three";

/**
 * Generated class for the ModalTabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage()
@Component({
  selector: 'page-modal-tabs',
  templateUrl: 'modal-tabs.html'
})
export class ModalTabsPage {

  tabOneRoot = TabOnePage
  tabTwoRoot = TabTwoPage
  tabThreeRoot = TabThreePage


  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}


  closeArticle() {
    this.viewCtrl.dismiss();
  }
}
