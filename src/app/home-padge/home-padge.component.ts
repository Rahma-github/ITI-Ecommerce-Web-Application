import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ShopService } from '../shop.service';

@Component({
  selector: 'app-home-padge',
  templateUrl: './home-padge.component.html',
  styleUrls: ['./home-padge.component.css']
})
export class HomePadgeComponent implements OnInit {
allProducts:any[]=[]
private _searchFilter:string = ''; 
filterBySearch:any[] = []; 
  constructor(private route:ActivatedRoute,private allshop:ShopService) { }

  ngOnInit(): void {
this.allshop.geElectronics().subscribe({next:(data)=>{
  this.allProducts = [...data];  
  console.log("--------------------1 ",this.allProducts)
  this.filterBySearch = this.allProducts; 
}})

this.allshop.geClothes().subscribe({next:(data)=>{
  this.allProducts.push(...data); 
  console.log("--------------------2 ",this.allProducts)
  this.filterBySearch = this.allProducts; 
}})

this.allshop.getFurniture().subscribe({next:(data)=>{
  this.allProducts.push(...data);  
  console.log("--------------------3 ",this.allProducts)
  this.filterBySearch = this.allProducts; 
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
  return this.allProducts.filter((product) =>
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


