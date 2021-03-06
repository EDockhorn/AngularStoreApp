import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Product } from '../product';
import { ProductService } from '../products.service';


@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styles: []
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProductService) { }

  public products!: Product[];
  public rememberLoginControl = new FormControl();

  ngOnInit() {
    this.produtoService.obterProdutos()
      .subscribe(
        products => {
          this.products = products;
          console.log(products);
        },
        error => console.log(error)
      );
  }
}
