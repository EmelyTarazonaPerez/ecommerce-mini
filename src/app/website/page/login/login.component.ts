import { Component } from '@angular/core';
import { User } from '../../../models/user.model';
import { ServiceLogin } from '../../../services/login.service';
import { ServiceAuth } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  formActive: boolean = false
  messageError = { red: '', message: '', error: ''}
  dto: User[] = [{ name: '', gmail: '', password: '' }]

  constructor(
    private dataService: ServiceLogin,
    private authService: ServiceAuth,
    private router: Router,
    ) { }

  loginUser() {
    this.authService.loginAndGet(this.dto[0].gmail, this.dto[0].password).subscribe(
      () => this.router.navigateByUrl("/code-marketplace")
      ,
      error => {
        this.messageError.message = 'Invalid user ID and password combination';
        this.messageError.error = '2px solid rgb(241, 98, 98)';
        this.messageError.red = 'rgb(241, 98, 98)';
      })
  }

  activeForm() {
    console.log(this.formActive)
    return this.formActive = !this.formActive
  }

  createUser() {
    this.dataService.createUser(this.dto[0]).subscribe(data =>
      console.log(data)
    )
  }



}
