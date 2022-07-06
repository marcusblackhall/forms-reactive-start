import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
    this.signupForm = new FormGroup({

      'username' : new FormControl(null),
      'email':  new FormControl(null),
      'gender': new FormControl('male')
    });

  }
  genders = ['male', 'female'];

  signupForm: FormGroup;

}
