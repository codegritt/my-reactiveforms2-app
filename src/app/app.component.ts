import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular reactive form';
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  })

  LoginUser(){
    console.warn(this.loginForm.value);
  }
}
