import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TracksOfITIComponent } from "../../component/tracks-of-iti/tracks-of-iti.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TracksOfITIComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'session';
}
