import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name = 'Kifayath';
  quality = '[passionate: programmer, creative: designer]';

  @Input() isDark: boolean = false;
}
