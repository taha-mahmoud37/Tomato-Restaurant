import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor() { 
   
  }

  ngOnInit(): void {
    $(".feature").slick({
 
      // normal options...
      
      autoplaySpeed:3000,
      dots: false,
      arrows: false,
      
     
      // the magic
      responsive: [{
     
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
            dots: true,
            
          }
     
        }, {
     
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            dots: true,
            
          }
     
        }, {
     
          breakpoint: 300,
          settings: "unslick" // destroys slick
     
        }]
    });
    
    $('.img').slick({

      dots: true,
      arrows:true,
      autoplay:false,
      autoplayspeed:1000,
      infinite:true,
      
  
  
    });

  }

}
