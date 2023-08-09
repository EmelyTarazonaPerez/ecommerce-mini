import { Component } from '@angular/core';
import { User } from 'src/app/models/user.modelo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  red: string = ''
  message: string = ''
  error: string = ''
  login: User[] = [{
    gmail: '',
    password: ''
  }]

  data: User[] = [
    { gmail: 'paola@gmail.com', password: '1234' },
    { gmail: 'karen@gmail.com', password: '1234' },
    { gmail: 'nicolas@gmail.com', password: '1234' },
  ]

  loginUser() {
    let resp = this.data.filter(item => this.login.includes(item))
    if (resp.length == 0) {
      this.message = 'Invalid user ID and password combination'
      this.error = '2px solid rgb(241, 98, 98)'
      this.red = 'rgb(241, 98, 98)'
    } else {
      this.message = ''
    }
    return this.message
  }
}
