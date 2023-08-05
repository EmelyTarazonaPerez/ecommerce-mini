import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
@Input() title: string = ''
@Input() color: string = ''

changeColorText(){
  return this.color
}
}
