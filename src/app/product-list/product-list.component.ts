import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  products=[];
  constructor(private service:ProductService) { }

  ngOnInit()
  {
    let observableResult=this.service.Select();

    observableResult.subscribe(Response=>{
        
      if(Response['status']==='success')
      {
        this.products=Response['data'] as any;
      }
      else
      {
        console.log('error',Response['error']);
      }
    })
  }

}
