import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
    this.signupForm = new FormGroup({

      'username' : new FormControl(null,Validators.required),
      'email':  new FormControl(null,[Validators.required,Validators.email]),
      'gender': new FormControl('male')
    });

  }
  genders = ['male', 'female'];

  signupForm: FormGroup;

  onSubmit(){
    console.log(this.signupForm);
  }

}
