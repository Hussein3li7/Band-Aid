
import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database'
import {AngularFireAuth,AngularFireAuthModule} from '@angular/fire/auth'

/*
  Generated class for the ApiServiseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiseProvider {

  AuthState=false
UserName:string
  private addInfo=this.db.list('addState')


  constructor(public Auth:AngularFireAuth,public db:AngularFireDatabase) {
    console.log('Hello ApiServiseProvider Provider');
  }

}
