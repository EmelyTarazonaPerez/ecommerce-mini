import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.modelo';
import { DataService } from '../../services/data-product.service';
import { SeviceUsers } from 'src/app/services/users/data.user.service';
import { AuthService } from 'src/app/services/users/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ModuloResgistro = false

  messageError = {
    red: '',
    message: '',
    error: '',
  }

  login: User[] = [{
    name: '',
    email: '',
    password: ''
  }]

  dataLogin!: User[]

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private userService: SeviceUsers,
  ) { }

  ngOnInit() {
    this.dataService.getUser().subscribe(data => this.dataLogin = data)
  }

  loginUser() {
    this.authService.login(this.login[0]).subscribe(data => {
      console.log(data.access_token)
    })

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

  ActiveDomResgistrar() {
    this.ModuloResgistro = true
  }

  createUser() {
    this.userService.create(this.login[0]).subscribe(data => {
      console.log(data)
    })
  }

}
