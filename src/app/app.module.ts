import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatePage } from '../pages/state/state';
import { ObjectivesPage } from '../pages/objectives/objectives';
import { PrinciplesPage } from '../pages/principles/principles';
import { AboutPage } from '../pages/about/about'
import { BrokenPage } from '../pages/broken/broken'
import { FaintingPage } from '../pages/fainting/fainting'
import { BurnsPage } from '../pages/burns/burns'
import { SunstrokePage } from '../pages/sunstroke/sunstroke'
import { ChokingPage } from '../pages/choking/choking'
import { BloodCirculationPage } from '../pages/blood-circulation/blood-circulation'
import { UnconsciousnessPage } from '../pages/unconsciousness/unconsciousness';
 
import { MusculoskeletalInjuriesPage } from '../pages/musculoskeletal-injuries/musculoskeletal-injuries';
import { MaxTemperaturesPage } from '../pages/max-temperatures/max-temperatures';
 
import { AchesPage } from '../pages/aches/aches';
import { MajorAccidentsPage } from '../pages/major-accidents/major-accidents';
 
import {PythonPage} from '../pages/python/python'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { COMPONENT_VARIABLE } from '@angular/platform-browser/src/dom/dom_renderer';
import { COMPILER_PROVIDERS } from '@angular/platform-browser-dynamic/src/compiler_factory';
import { EmergencyBirthPage } from '../pages/emergency-birth/emergency-birth';
import { WoundsPage } from '../pages/wounds/wounds';
import {FeedBackPage} from '../pages/feed-back/feed-back'

import{LoginPage} from '../pages/login/login'

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import{AngularFireAuthModule} from '@angular/fire/auth'

import { ApiServiseProvider } from '../providers/api-servise/api-servise';

export const firebaseConfig = {
  apiKey: "AIzaSyDelTjJUT2zeXapaz5mexNU_Rn91prbN20",
  authDomain: "first-aid-3fbf2.firebaseapp.com",
  databaseURL: "https://first-aid-3fbf2.firebaseio.com",
  projectId: "first-aid-3fbf2",
  storageBucket: "first-aid-3fbf2.appspot.com",
  messagingSenderId: "838370832497"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StatePage,
    PrinciplesPage,
    ObjectivesPage,
    AboutPage,
    BrokenPage,
    FaintingPage,
    BurnsPage,
    SunstrokePage,
    ChokingPage,
    BloodCirculationPage,
    UnconsciousnessPage,
    FeedBackPage,
    MusculoskeletalInjuriesPage,
    MaxTemperaturesPage,
    LoginPage,
    AchesPage,
    MajorAccidentsPage,
 
    EmergencyBirthPage,
    WoundsPage,
    PythonPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StatePage,
    PrinciplesPage,
    ObjectivesPage,
    AboutPage,
    BrokenPage,
    FaintingPage,
    BurnsPage,
    SunstrokePage,
    ChokingPage,
    BloodCirculationPage,
    MaxTemperaturesPage,
    EmergencyBirthPage,
    UnconsciousnessPage,
    MusculoskeletalInjuriesPage,
    FeedBackPage,
    AchesPage,
    MajorAccidentsPage,
    LoginPage,
    WoundsPage,
    PythonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiServiseProvider,

  ]
})
export class AppModule { }
