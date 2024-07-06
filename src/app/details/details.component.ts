import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private allshop:ShopService) { }
  singleProdect:any; 
  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id')
    console.log("this ID ",id)
    this.allshop.geSingleProduct(id).subscribe({next:(data)=>{
      this.singleProdect = data; 
      console.log("Single Product")
      console.log(this.singleProdect);
    }})
  }
  addToCart(product:any){
    this.allshop.addToCartService(product); 
  }
  addToFavorite(product:any){
    this.allshop.addToFavoriteService(product); 
  }
}
