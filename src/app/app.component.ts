import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular reactive form';
  loginForm = new FormGroup({
    user: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
  })

  LoginUser(){
    console.warn(this.loginForm.value);
  }
  get user(){
    return this.loginForm.get('user');
  }
}
