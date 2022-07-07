import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    this.signupForm = new FormGroup({
      'userData': new FormGroup(
        {
          'username': new FormControl(null, [Validators.required,this.forbiddenNames.bind(this)]),
          'email': new FormControl(null, [Validators.required, Validators.email],
            this.forbiddenEmail)
        }
      ),

      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

  }
  genders = ['male', 'female'];

  signupForm: FormGroup;

  forbiddenUserNames = ["Anna","Mark"];

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby(){
    const control = new FormControl(null,Validators.required);

    (<FormArray> this.signupForm.get('hobbies')).push(control);


  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
/**
 * This is an example of creating a custom validator
 * @param control 
 * @returns 
 */
  forbiddenNames(control: FormControl) :{[s:string]: boolean}{

    if ( this.forbiddenUserNames.indexOf(control.value) != -1){
      return { 'nameIsForbidden' : true}
    }
    return null;

  }

  forbiddenEmail(control: FormControl) : Promise<any> | Observable<any> {

    const promise = new Promise<any>((resolve,error) => {

      setTimeout( ()=> {

       
        console.log("check email " + control.value);
        let emailValue = control.value;
        if (emailValue && emailValue === 'marcus@gmail.com'){
          resolve({"emailIsForbidden" : true});

        } else {
          resolve(null);
        }

      },1500);  

     
       
    });

    return promise;
  }

}
