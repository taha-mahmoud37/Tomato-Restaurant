import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  constructor(private _Router: Router) {
   
   }

  ngOnInit(): void {
    
  }
   
 
 
  all()
  {
    let all = document.getElementById("overlay");
    let starter = document.getElementById("starters");
    let breakFast = document.getElementById("breakfast");
    let lunch = document.getElementById("lunch");
    let dinner = document.getElementById("dinner");
    let dessert = document.getElementById("dessert");


    
     
     all.style.display = "flex";
     starter.style.display = "none";
     breakFast.style.display = "none";
     lunch.style.display = "none";
     dinner.style.display = "none";
     dessert.style.display = "none";
     
  };

  starters()
  {
    let all = document.getElementById("overlay");
    let starter = document.getElementById("starters");
    let breakFast = document.getElementById("breakfast");
    let lunch = document.getElementById("lunch");
    let dinner = document.getElementById("dinner");
    let dessert = document.getElementById("dessert");
    starter.style.display="flex";
    all.style.display= "none";
    breakFast.style.display = "none";
    lunch.style.display = "none";
     dinner.style.display = "none";
     dessert.style.display = "none";
  }

  breakfasts()
  {
    let all = document.getElementById("overlay");
    let starter = document.getElementById("starters");
    let breakFast = document.getElementById("breakfast");
    let lunch = document.getElementById("lunch");
    let dinner = document.getElementById("dinner");
    let dessert = document.getElementById("dessert");
    starter.style.display= "none";
    all.style.display= "none";
    breakFast.style.display = "flex";
    lunch.style.display = "none";
    dinner.style.display = "none";
    dessert.style.display = "none";
  }


  lunchs()
  {
    let all = document.getElementById("overlay");
    let starter = document.getElementById("starters");
    let breakFast = document.getElementById("breakfast");
    let lunch = document.getElementById("lunch");
    let dinner = document.getElementById("dinner");
    let dessert = document.getElementById("dessert");
    starter.style.display= "none";
    all.style.display= "none";
    breakFast.style.display = "none";
    lunch.style.display = "flex";
    dinner.style.display = "none";
    dessert.style.display = "none";
  }

  dinners()
  {
    let all = document.getElementById("overlay");
    let starter = document.getElementById("starters");
    let breakFast = document.getElementById("breakfast");
    let lunch = document.getElementById("lunch");
    let dinner = document.getElementById("dinner");
    let dessert = document.getElementById("dessert");
    starter.style.display= "none";
    all.style.display= "none";
    breakFast.style.display = "none";
    lunch.style.display = "none";
    dinner.style.display = "flex";
    dessert.style.display = "none";
  }

  desserts()
  {
    let all = document.getElementById("overlay");
    let starter = document.getElementById("starters");
    let breakFast = document.getElementById("breakfast");
    let lunch = document.getElementById("lunch");
    let dinner = document.getElementById("dinner");
    let dessert = document.getElementById("dessert");
    starter.style.display= "none";
    all.style.display= "none";
    breakFast.style.display = "none";
    lunch.style.display = "none";
    dinner.style.display = "none";
    dessert.style.display = "flex";
  }

  naviget()
  {
    this._Router.navigate(['/desc'])
  }

}

