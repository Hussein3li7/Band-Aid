import { Component, style } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{StatePage} from '../state/state'

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

   hideAbout:any;
   hideTeam:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
   


    



     this.hideAbout=document.getElementsByClassName('conn-about-mob') as  HTMLCollectionOf<HTMLElement>
    this.hideAbout[0].style.display='none';

      this.hideTeam=document.getElementsByClassName('conn-personal-info') as  HTMLCollectionOf<HTMLElement>
    this.hideTeam[0].style.display='none';

  }



  team(){
   
    
      this.hideAbout=document.getElementsByClassName('conn-about-mob') as  HTMLCollectionOf<HTMLElement>
      this.hideAbout[0].style.display='none'
 
      this.hideTeam=document.getElementsByClassName('conn-personal-info') as  HTMLCollectionOf<HTMLElement>
      this.hideTeam[0].style.display='block' 
 
   


  }

about(){

    this.hideTeam=document.getElementsByClassName('conn-personal-info') as  HTMLCollectionOf<HTMLElement>
  this.hideTeam[0].style.display='none' 

    this.hideAbout=document.getElementsByClassName('conn-about-mob') as  HTMLCollectionOf<HTMLElement>
  this.hideAbout[0].style.display='block' 


}

}
