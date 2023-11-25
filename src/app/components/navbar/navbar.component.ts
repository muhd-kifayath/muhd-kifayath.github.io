import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public isCollapsed = true;

  isDark: boolean = false;

  @Output("toggleDarkTheme") toggleDarkTheme: EventEmitter<any> = new EventEmitter();

  darkToggle() {
    this.toggleDarkTheme.emit();
    this.isDark = !this.isDark;
  }
}
