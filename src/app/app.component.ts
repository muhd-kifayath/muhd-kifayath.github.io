import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { StyleManager } from './shared/services/style-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio';
  theme ='light';
  top:any;
  left:any;
  expand=false;

  constructor(private spinner: NgxSpinnerService, public styleManager: StyleManager) {
  }

  toggleDarkTheme() {
    if(this.styleManager.isDark){
      document.documentElement.setAttribute('data-bs-theme', 'light')
      this.styleManager.isDark = !this.styleManager.isDark;
      
    }
    else {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
      this.styleManager.isDark = !this.styleManager.isDark;
    }
  }


  @HostListener('document:mousemove', ['$event'])
    onMousemove($event: { pageY: number; pageX: number; }) {
      this.top=($event.pageY - 10)+ "px";
      this.left= ($event.pageX - 10)+ "px";
  }

  ngOnInit() {
    sessionStorage.setItem('shown', true.toString());

    if (sessionStorage.getItem('shown') != 'true') this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }


  ngOnDestroy() {
    sessionStorage.clear();
  }

  
}

const setTheme = (theme: string) => {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'light')
  }
}
