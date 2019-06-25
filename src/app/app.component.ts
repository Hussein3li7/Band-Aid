import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Content, Button } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddTryingStationsPage } from '../pages/add-trying-stations/add-trying-stations';
import { AddNewStatePage } from '../pages/add-new-state/add-new-state';

import { HomePage } from '../pages/home/home';

import { ObjectivesPage  } from '../pages/objectives/objectives';
import { PrinciplesPage } from '../pages/principles/principles';
import{StatePage} from '../pages/state/state'
import{AboutPage} from '../pages/about/about'
import {FeedBackPage} from '../pages/feed-back/feed-back'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any ,icon:string}>;

   public night:boolean=false;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'الرئيسية', component: HomePage,icon:'home'  },
      { title: 'الحالات', component: StatePage,icon:'medkit'  }, 
      { title: 'مبادئ الاسعافات الاولية', component: PrinciplesPage,icon:'pulse'  }, 
      { title: 'اهداف الاسعافات الاولية', component: ObjectivesPage,icon:'leaf'  },
      { title: ' اظافة حالات جديدة', component: AddNewStatePage,icon:'medal'  },
      { title: ' اضافة مراكز تدريب ', component: AddTryingStationsPage,icon:'happy'  },
      { title: 'ملاحظات', component: FeedBackPage,icon:'podium'  } ,
      { title: 'حول', component: AboutPage,icon:'alert'  },


    ];


  }



  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

//   ok(){

//     if(this.night){
 
//       let y = document.getElementsByTagName('ion-content'  ) as HTMLCollectionOf<HTMLElement>;
//       y[0].style.backgroundColor="#222"
      

//       let shand = document.getElementsByClassName('test') as HTMLCollectionOf<HTMLElement>;
//       shand[0].style.backgroundColor="#222"

//     // let shand2 = document.getElementsByClassName('backIon') as HTMLCollectionOf<HTMLElement>;
//     // shand2[0].style.backgroundColor="#222"

//     let shand3 = document.getElementsByClassName('night') as HTMLCollectionOf<HTMLElement>;

 
//             shand3[0].style.color="#f5f5f5"
//         shand3[0].style.backgroundColor="#222"
    

//     for(let x=0 ;x<this.pages.length;x++){

//      let title = document.getElementsByClassName('btn') as HTMLCollectionOf<HTMLElement>;
//       title[x].style.color="#ececec"

// }



//     }
//     else{

//         let shand = document.getElementsByClassName('test') as HTMLCollectionOf<HTMLElement>;
//         shand[0].style.backgroundColor="#2196F3"
    
//         let shand2 = document.getElementsByClassName('backIon') as HTMLCollectionOf<HTMLElement>;
//         shand2[0].style.backgroundColor="#f8f8f8"

//         let shand3 = document.getElementsByClassName('night') as HTMLCollectionOf<HTMLElement>;
//         shand3[0].style.color="#2b8cd6"
//         shand3[0].style.backgroundColor="#f5f5f5"
 

    
    
    
//     for(let x=0 ;x<this.pages.length;x++){
    
//          let title = document.getElementsByClassName('btn') as HTMLCollectionOf<HTMLElement>;
//           title[x].style.color="#5da4d5"

    
//     }



//     }

    



// }


}