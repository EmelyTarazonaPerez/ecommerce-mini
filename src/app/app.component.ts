import { Component, OnInit } from '@angular/core';
import { ServiceAuth } from './services/auth.service';
import { ServiceToken } from './services/token.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mini ecommerce';

  constructor(private serviceToken:ServiceToken, private serviceAuth:ServiceAuth){ }

  ngOnInit(){
    const token = this.serviceToken.getToken();
    if(token){
      this.serviceAuth.profile().subscribe()
    }
  }


}
