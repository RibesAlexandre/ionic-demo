import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";

/**
 * Generated class for the TabOnePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-one',
  templateUrl: 'tab-one.html',
})
export class TabOnePage {

  public article: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider, public viewCtrl: ViewController) {}

  ionViewCanEnter(): Promise <any> {
    return new Promise((resolve, reject) => {
      this.api.get('article.json').map(resp => resp.json()).subscribe(response => {
        console.log(response);
        this.article = response;
        resolve();
      }, error => {
        reject();
        console.log(error);
      });
    });
  }

  closeArticle() {
    this.viewCtrl.dismiss();
  }

}
