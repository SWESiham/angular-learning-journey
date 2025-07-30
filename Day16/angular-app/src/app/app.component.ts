import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { ProductComponent } from "../../component/product/product.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,FooterComponent,ProductComponent],
   standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
}
