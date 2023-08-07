import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuOptions = [
    { name: 'Home', url: '/home', icon: 'home-outline' },
  ];
  constructor() {}
}
