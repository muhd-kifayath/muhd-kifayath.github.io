import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { StyleManager } from './shared/services/style-manager.service';
import Headroom from 'headroom.js';

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
  isDark: boolean = true;

  constructor(private spinner: NgxSpinnerService, public styleManager: StyleManager) {
    document.documentElement.setAttribute('data-bs-theme', 'dark')

  }

  toggleDarkTheme() {
    if(this.isDark){
      document.documentElement.setAttribute('data-bs-theme', 'light')
      this.isDark = !this.isDark;
      
    }
    else {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
      this.isDark = !this.isDark;
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

    const header = document.querySelector("header")!;

    var headroom = new Headroom(header, {
      offset: 300,
      tolerance: {
        up: 30,
        down: 30
      },
    });
    headroom.init();
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
