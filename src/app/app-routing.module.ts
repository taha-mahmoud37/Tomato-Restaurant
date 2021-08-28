import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { MenuComponent } from './menu/menu.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PagesComponent } from './pages/pages.component';
import { ShoppingComponent } from './shopping/shopping.component';



const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"},
  {path:"home" , component:HomeComponent},
  {path:"blog" , component:BlogComponent},
  {path:"menu" , component:MenuComponent},
  {path:"contacts" , component:ContactsComponent},
  {path:"recipe" , component:RecipeComponent},
  {path:"reservation" , component:ReservationComponent},
  {path:"pages" , component:PagesComponent},
  
  {path:"shopping" , component:ShoppingComponent},
  {path:"**" , component:ShoppingComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
