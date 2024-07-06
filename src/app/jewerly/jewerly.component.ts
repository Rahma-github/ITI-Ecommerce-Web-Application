import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-jewerly',
  templateUrl: './jewerly.component.html',
  styleUrls: ['./jewerly.component.css']
})
export class JewerlyComponent implements OnInit {

  constructor(private allshop:ShopService) { }
  Furniture:any[]=[]; 
  private _searchFilter:string = ''; 
  filterBySearch:any[] = []; 
  ngOnInit(): void {
    this.allshop.geAllFurniture().subscribe({next:(data)=>{
      this.Furniture = data; 
      console.log("DATA")
      console.log(this.Furniture);
      this.filterBySearch = this.Furniture; 
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
    return this.Furniture.filter((product) =>
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
