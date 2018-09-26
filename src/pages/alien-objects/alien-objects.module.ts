import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlienObjectsPage } from './alien-objects';

@NgModule({
  declarations: [
    AlienObjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(AlienObjectsPage),
  ],
})
export class AlienObjectsPageModule {}
