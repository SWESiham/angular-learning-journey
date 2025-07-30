import { Component } from '@angular/core';
import { CardComponent } from "../../component/card/card.component";
import { CommonModule } from '@angular/common';
import { IProduct } from '../../interface/iproduct';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: IProduct[] = [
    { id:1, title: 'Camera Digital', price: 1000, quantity: 10, image: 'assets/images/camara digital.jpeg' },
    { id:2, title: 'Speakers', price: 2000, quantity: 1, image: 'assets/images/4ac931e4-9143-4d79-b3f6-8d7753cb14f3.jpeg' },
    { id:2, title: 'MP3', price: 5000, quantity: 2, image: 'assets/images/4f976a3c-dfa3-476c-bf9f-06e911114761.jpeg' },
    { id:2, title: 'Fan', price: 1500, quantity: 5, image: 'assets/images/60727cd9-69a5-4dd5-9cf6-8b964f7f64b9.jpeg' },
    { id:2, title: 'Classic Speakers', price: 2500, quantity: 0, image: 'assets/images/2715eba5-6cfa-4ebf-9a34-10041b0d4d77.jpeg' },
    { id:2, title: 'Magic Planet 0Xc', price: 2300, quantity: 5, image: 'assets/images/9684e5da-4cab-43ac-b16e-e6a91e117f6a.jpeg' },
    { id:2, title: 'Magic Planet 12', price: 200, quantity: 5, image: 'assets/images/Magick💫mauve amethyst.jpeg' },
  ]
}
