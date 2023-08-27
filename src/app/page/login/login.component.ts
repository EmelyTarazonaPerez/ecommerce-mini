import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.modelo';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messageError = {
    red: '',
    message: '',
    error: '',
  }

  login: User[] = [{
    gmail: '',
    password: ''
  }]

  dataLogin!: User[]

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUser().subscribe(data => this.dataLogin = data)
  }

  loginUser() {
    const resp = this.dataLogin.filter(item => this.login.includes(item))
    if (resp.length == 0) {
      this.messageError.message = 'Invalid user ID and password combination'
      this.messageError.error = '2px solid rgb(241, 98, 98)'
      this.messageError.red = 'rgb(241, 98, 98)'
    } else {
      this.messageError.message = ''
    }
    return this.messageError
  }
}
