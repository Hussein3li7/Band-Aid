import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

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
 
    MusculoskeletalInjuriesPage,
    MaxTemperaturesPage,
 
    AchesPage,
    MajorAccidentsPage,
 
    EmergencyBirthPage,
    WoundsPage,
    PythonPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
 
    AchesPage,
    MajorAccidentsPage,
 
    WoundsPage,
    PythonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
