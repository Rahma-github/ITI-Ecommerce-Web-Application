import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }
  favoriteProducts:any[]=[]; 
  ngOnInit(): void {
    this.getFavoriteProductd(); 
  }
  getFavoriteProductd(){
    if('favorite' in localStorage){
      this.favoriteProducts = JSON.parse(localStorage.getItem("favorite")!); 
    }
    console.log(this.favoriteProducts); 
  }

  deleteProduct(index:number){
    this.favoriteProducts.splice(index,1); 
    localStorage.setItem("favorite",JSON.stringify(this.favoriteProducts)); 
  }

  ClearFavorite(){
    this.favoriteProducts = []; 
    localStorage.setItem("favorite",JSON.stringify(this.favoriteProducts)); 
  }

}
