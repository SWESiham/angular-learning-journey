import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
urlTOimage: string = "assets/img.jpeg"
  altImage: string = "image"
  text:string="Some quick example text to build on the card title and make up the bulk of the card’s content."
}
