import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OnlineTestService {

  constructor(private http:HttpClient) {
   }
   public getJSON1(url:string):Observable<any>{
     return this.http.get(url);
   }  

   public getQuestionnaire() {
    return this.http.get('./assets/json/questions.json');
   }

}
