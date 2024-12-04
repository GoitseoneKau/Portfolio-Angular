import { afterNextRender, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(){
    afterNextRender(()=> window.scrollTo({ top: 0, behavior: 'smooth' }))
  }

}
