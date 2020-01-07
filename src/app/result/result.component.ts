import { Component } from '@angular/core';
import{ ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  allQuestions= [];
  constructor(private router:ActivatedRoute ) { 
    // var res = sessionStorage.getItem('allQuestions'); 
    // this.allQuestions = JSON.parse("[" + res + "]");
    // console.log(this.allQuestions)

    // let storedToken: any = localStorage.getItem(this.allQuestions);
    // console.log("storedToken:", storedToken);//====> here this console is[object object]
    // if (!storedToken) throw 'no token found';
    // return storedToken;
  // this.router.snapshot.paramMap.get(allQuestions)
  //this.router.paramMap.subscribe(params => {
 
  //})
  
  }
}
