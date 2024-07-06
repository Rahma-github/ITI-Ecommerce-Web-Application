import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  constructor(private allshop:ShopService) { }
  Clothes:any[]=[]; 
  private _searchFilter:string=''; 
  filterBySearch:any[]=[]; 
  ngOnInit(): void {
    this.allshop.geAllClothes().subscribe({next:(data)=>{
      this.Clothes = data; 
      console.log("DATA")
      console.log(this.Clothes);
      this.filterBySearch = this.Clothes; 
    }})
  }

  get searchFilter():string{
    return this._searchFilter
  }
  set searchFilter(value:string){ 
    this._searchFilter = value; 
    this.filterBySearch = this.filterProduct(value); 
  }

  filterProduct(val:string){
    return this.Clothes.filter((product) =>
    product.Name.toLocaleLowerCase().includes(val.toLocaleLowerCase())
  );
  }

  
  addToCart(product:any){
    this.allshop.addToCartService(product); 
  }
  addToFavorite(product:any){
    this.allshop.addToFavoriteService(product); 
  }
}
