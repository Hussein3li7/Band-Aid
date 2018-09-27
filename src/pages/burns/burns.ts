import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the BurnsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-burns',
  templateUrl: 'burns.html',
})
export class BurnsPage {

  video: any = {
    url: 'https://www.youtube.com/embed/YL6tlZqReHA',
    title: 'الحروق'
};

trustedVideoUrl:SafeResourceUrl

  constructor(public navCtrl: NavController, public navParams: NavParams,public domSanitizer : DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurnsPage');
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);

  }

}
