import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
import {ModalTabsPage} from "../modal-tabs/modal-tabs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private api: ApiProvider, public modalCtrl: ModalController) {}

  articles: any;

  ionViewCanEnter(): Promise <any> {
    return new Promise((resolve, reject) => {
      this.api.get('home.json').map(resp => resp.json()).subscribe(response => {
        this.articles = response.articles;
        resolve();
      }, error => {
        reject();
        console.log(error);
      });
    });
  }

  openArticle(articleId) {
    let modal = this.modalCtrl.create(ModalTabsPage, {"id": articleId});
    modal.present();
  }

}
