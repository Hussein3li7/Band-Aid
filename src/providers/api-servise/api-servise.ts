
import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database'
import {AngularFireAuth,AngularFireAuthModule} from '@angular/fire/auth'
 
import{NewStateModel,NewStationsModel} from '../../Model/NewState'
import { Observable } from 'rxjs';
/*
  Generated class for the ApiServiseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiseProvider {

  AuthState=false
  AdminLogin=false
  UserName:string
  private addInfo=this.db.list('addState')

  info:Observable<any[]>
  private NewStateRef=this.db.list<NewStateModel>('newState')
  private NewStationsRef=this.db.list<NewStationsModel>('StationsAddedByUser')

  constructor(public Auth:AngularFireAuth,public db:AngularFireDatabase) {
    console.log('Hello ApiServiseProvider Provider');
  }

  

  getNewState(){
    return this.NewStateRef;
  
  }

showNewState(){
  return this.info
}

  getNewStations(){
    return this.NewStationsRef;
  }




}
