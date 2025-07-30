import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { HomeComponent } from "../../component/home/home.component";
import { CardComponent } from "../../component/card/card.component";
import { ProductComponent } from "../../component/product/product.component";
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, CardComponent, ProductComponent, FooterComponent],
templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-2';
}
