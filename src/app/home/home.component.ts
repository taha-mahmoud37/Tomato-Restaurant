import { Component, OnInit ,  HostListener  } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  
  constructor() { 
    
  }
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    dots:false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
      
    },
    
  }
  

  @HostListener('window:scroll', ['$event'])

onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
  

  ngOnInit(): void {
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
            
          }
         
     
        }]
    });
    
  }
  down()
  {
    $('html,body').animate({scrollTop:$("#about").offset().top} , 1000);
  }

  

  

}
