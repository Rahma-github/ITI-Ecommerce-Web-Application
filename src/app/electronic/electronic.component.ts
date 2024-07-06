import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css']
})
export class ElectronicComponent implements OnInit {

  constructor(private allshop:ShopService) { }
  electronics:any[]=[]; 
  private _searchFilter:string = ''; 
  filterBySearch:any[] = []; 
  ngOnInit(): void {
    this.allshop.geAllElectronics().subscribe({next:(data)=>{
      this.electronics = data; 
      console.log(this.electronics); 
      this.filterBySearch = this.electronics; 
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
    return this.electronics.filter((product) =>
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
