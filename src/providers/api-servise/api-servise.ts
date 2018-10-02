import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database'
import {AngularFireAuth,AngularFireAuthModule} from '@angular/fire/auth'
import{login} from '../../model/varInfo'
/*
  Generated class for the ApiServiseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiseProvider {

  ingo:login

  private addInfo=this.db.list('addState')


  constructor(public http: HttpClient,public Auth:AngularFireAuth,public db:AngularFireDatabase) {
    console.log('Hello ApiServiseProvider Provider');
  }


login(){
  this.Auth.auth.signInWithEmailAndPassword(this.ingo.user,this.ingo.pass);
}


add(state:login){

  this.addInfo.push(this.login)

}




}
