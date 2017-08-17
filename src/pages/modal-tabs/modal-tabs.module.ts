import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalTabsPage } from './modal-tabs';

@NgModule({
  declarations: [
    ModalTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalTabsPage),
  ]
})
export class ModalTabsPageModule {}
