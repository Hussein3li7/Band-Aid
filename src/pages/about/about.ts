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
   

//     team  
//  about


 let borAbout=document.getElementsByClassName('about') as HTMLCollectionOf<HTMLElement>
 borAbout[0].style.borderBottomLeftRadius="100px"

    let hidedate=document.getElementsByClassName('conn-btn-details') as HTMLCollectionOf<HTMLElement>
    hidedate[0].style.backgroundColor="#2699fb"
    
    
      this.hideAbout=document.getElementsByClassName('conn-about-mob') as  HTMLCollectionOf<HTMLElement>
      this.hideAbout[0].style.display='none'
 
      this.hideTeam=document.getElementsByClassName('conn-personal-info') as  HTMLCollectionOf<HTMLElement>
      this.hideTeam[0].style.display='block' 
      
      let x =document.getElementsByClassName('conn-info') as  HTMLCollectionOf<HTMLElement>

  for(let z=0;z<4;z++){
      x[z].style.backgroundColor='#2699fb';
  }

  }

about(){

    this.hideTeam=document.getElementsByClassName('conn-personal-info') as  HTMLCollectionOf<HTMLElement>
  this.hideTeam[0].style.display='none' 

    this.hideAbout=document.getElementsByClassName('conn-about-mob') as  HTMLCollectionOf<HTMLElement>
    this.hideAbout[0].style.display='block' 
    this.hideAbout[0].style.backgroundColor="#f5f5f5"

    let borAbout=document.getElementsByClassName('team') as HTMLCollectionOf<HTMLElement>
    borAbout[0].style.borderBottomRightRadius="100px"

  let hide_date=document.getElementsByClassName('conn-btn-details') as HTMLCollectionOf<HTMLElement>
    hide_date[0].style.backgroundColor="#f5f5f5"


}

}
