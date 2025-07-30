import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input,Output } from '@angular/core';
import { IProduct } from '../../interface/iproduct';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() product!: IProduct;
}
