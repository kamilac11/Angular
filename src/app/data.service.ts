import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /** dependecy injection */
  constructor(private http: HttpClient) { }

  getUsers(){ /**defining end points */
    return this.http.get('https://reqres.in/api/users')
  }

/** 
  firstClick() {
    return console.log('clicked'); /** when button is cliced on console show up communicate: clicked 
  }
*/

}
