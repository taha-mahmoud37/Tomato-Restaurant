import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tomato';
  
  
  @HostListener('window:scroll', ['$event'])
  
  onWindowScroll(e) {
      let element = document.querySelector('.navbar');
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('navbar-inverse');
      } else {
        element.classList.remove('navbar-inverse');
      }
    }

    
    
    
   
    
} 
