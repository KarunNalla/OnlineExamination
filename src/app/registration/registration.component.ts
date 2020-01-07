import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  Registration: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.Registration = this.formBuilder.group({
      FullName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]]

    });

  }
  get f() { return this.Registration.controls; }

  onSubmit(value) {
    
    this.submitted = true;
    if (this.Registration.invalid) {
      return;
    }
    var fullname= value.controls.FullName.value;
    sessionStorage.setItem('FullName', fullname);
    this.router.navigateByUrl('onlineTest');
  }



}

