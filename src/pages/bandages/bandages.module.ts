import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BandagesPage } from './bandages';

@NgModule({
  declarations: [
    BandagesPage,
  ],
  imports: [
    IonicPageModule.forChild(BandagesPage),
  ],
})
export class BandagesPageModule {}
