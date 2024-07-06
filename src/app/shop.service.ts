import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor(private http:HttpClient) {   }

  getDate():Observable<any>{
    return this.http.get('http://localhost:3500/getProducts');
    }
    geElectronics():Observable<any>{
    return this.http.get('http://localhost:3500/geElectronics');
    }
    getFurniture():Observable<any>{
    return this.http.get('http://localhost:3500/getFurniture');
    }
    geClothes():Observable<any>{
    return this.http.get('http://localhost:3500/geClothes');
    }
    geAllProducts():Observable<any>{
    return this.http.get('http://localhost:3500/geAllProducts');
    }

    geAllElectronics():Observable<any>{
    return this.http.get('http://localhost:3500/getAllElectronics');
    }
    geAllFurniture():Observable<any>{
    return this.http.get('http://localhost:3500/geAllFurniture');
    }
    geAllClothes():Observable<any>{
    return this.http.get('http://localhost:3500/getAllClothes');
    }

    geSingleProduct(id:any):Observable<any>{
      console.log("Shop Service geSingleElectronics",id); 
    return this.http.get(`http://localhost:3500/geSingleProduct/${id}`);
    }
    cartProducts:any[]=[]; 
    favoriteProducts:any[]=[]; 
    
    addToCartService(product:any){
      console.log("ADD To Cart "); 
      console.log(product);
      product.Quantity = 1 ; 
      console.log(product); 
      if('cart' in localStorage){
        this.cartProducts = JSON.parse(localStorage.getItem("cart")!); 
        let exist = this.cartProducts.find(item =>item._id == product._id); 
        if(exist){
          alert("Product is already in your cart"); 
        }
        else{
          this.cartProducts.push(product); 
          localStorage.setItem("cart",JSON.stringify(this.cartProducts)); 
        }
      }
      else {
        this.cartProducts.push(product); 
        localStorage.setItem("cart",JSON.stringify(this.cartProducts)); 
      }
    }
    
    addToFavoriteService(product:any){
      console.log(product);
      if('favorite' in localStorage){
        this.favoriteProducts = JSON.parse(localStorage.getItem("favorite")!); 
        let exist = this.favoriteProducts.find(item =>item._id == product._id); 
        if(exist){
          alert("Product is already in your Favorite List"); 
        }
        else{
          this.favoriteProducts.push(product); 
          localStorage.setItem("favorite",JSON.stringify(this.favoriteProducts)); 
        }
      }
      else {
        this.favoriteProducts.push(product); 
        localStorage.setItem("favorite",JSON.stringify(this.favoriteProducts)); 
      }
    }
    
}
