import { Component, OnInit } from '@angular/core';
declare var $: any;



@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() {
  }
  
  ngOnInit(): void {
    
    $(".slider").slick({
 
      // normal options...
      infinite: true,
      autoplaySpeed:2000,
      dots: false,
      arrows: false,
      autoplay:true,
     
      // the magic
      responsive: [{
     
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            infinite: true,
            dots: false,
            
          }
     
        }, {
     
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            infinite: true,
            dots: false,
            
          }
     
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            infinite: true,
            dots: false,
            
          }
     
           // destroys slick
     
        }]
    });
    $(".testimonial").slick({
 
      // normal options...
      infinite: true,
      autoplaySpeed:3000,
      dots: false,
      arrows: false,
      autoplay:true,
      
     
      // the magic
      responsive: [{
     
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            infinite: true,
            dots: false,
            
          }
     
        }, {
     
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            infinite: true,
            dots: false,
            
          }
     
        }, {
     
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            infinite: true,
            dots: false,
            
          } // destroys slick
     
        }]
    });

   
  }

}
