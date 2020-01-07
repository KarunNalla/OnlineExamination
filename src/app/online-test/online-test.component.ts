import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {OnlineTestService} from '../services/online-test.service';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import  SampleJson from '../../assets/questions.json';

@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.css']
})
export class OnlineTestComponent implements OnInit {
  totalAnswered: number = 0;
	rightAnswer: number;
  
  fullname:string;
  onlinetest: FormGroup;
  questionnaire:any=[];show:boolean=false;questions:boolean=true;
  private _jsonURL = '../../assets/questions.json';
	constructor(private fb:FormBuilder, 
						 private router:Router, 
							private http:HttpClient,
							private _onlineTestService : OnlineTestService
						) { 
   
  }
  answerArray = [];

	allQuestions: any = [{
		"id": 1,
		"question": "The speaker of the Lok Sabha can ask a member of the house to stop speaking and let another member speak. This phenomenon is known as :",
		"a": "Crossing the floor",
		"b": "Yielding the floor",
		"c": "Point of Order",
		"d": "Calling Attention Motion",
		"answer": "b"
	},
	{
		"id": 2,
		"question": "The Comptroller and Auditor General of India can be removed from office in like manner and on like grounds as : ",
		"a": "High Court Judge",
		"b": "Prime Minister",
		"c": "Supreme Court Judge",
		"d": "None of Above",
		"answer": "c"
	},
	{
		"id": 3,
		"question": "Which Article of the Constitution provides freedom to manage religious affairs ?",
		"a": "Article 25",
		"b": "Article 26",
		"c": "Article 27",
		"d": "Article 25",
		"answer": "b"
	}
  ];
  

  // onSubmit() {
	// 	this.rightAnswer = 0;
	// 	this.totalAnswered = 0;
	// 	for (let i = 0; i < this.questionnaire.length; i++) {
	// 		if ("selected" in this.questionnaire[i] && (this.questionnaire[i]["selected"] != null)) {
	// 			this.totalAnswered++;
	// 			if (this.questionnaire[i]["selected"] == this.questionnaire[i]["answer"]) {
	// 				this.rightAnswer++;
	// 			}
	// 		}

  //   }
  //   this.router.navigateByUrl('result');
	// }

	onSubmit() {
		this.rightAnswer = 0;
		this.totalAnswered = 0;
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i] && (this.allQuestions[i]["selected"] != null)) {
				this.totalAnswered++;
				if (this.allQuestions[i]["selected"] == this.allQuestions[i]["answer"]) {
					this.rightAnswer++;
				}
			}

		}
		this.show=true;
		this.questions=false;
	//	sessionStorage.setItem('allQuestions', this.allQuestions);
		
		//this.router.navigateByUrl('result');

	}
  ngOnInit() {
   this.questionnaire = SampleJson.questions;
  //this.getQuestionnaire();
  this.fullname= sessionStorage.getItem('FullName');

  this.onlinetest = this.fb.group({
    questions: new FormControl(),
  });

  }

  getQuestionnaire(){
    this._onlineTestService.getQuestionnaire().subscribe(response=>{
      console.log("response::",response)
      
    })
  }

  // onSubmit(){
  //   this.router.navigateByUrl('result');
  // }
}
