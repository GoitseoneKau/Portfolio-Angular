import { afterNextRender, Component, OnInit, ViewChild} from '@angular/core';
import { FormsModule,NgForm,NgModel,ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  //form processing api
  url: string = 'https://formspree.io/f/xkndkvgg';
  
  //data model object
  
  data = {
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  };
  clientMessage:string=""
  isFormValid: boolean = false;

  // Inject HttpClient in the constructor
  constructor(private http: HttpClient) {
    afterNextRender(()=> window.scrollTo({ top: 0, behavior: 'smooth' }))
  }
  
  ngOnInit(): void {}

  // Method to handle form submission
  onSubmit(form:NgForm) {
  
      const formData = form.control.value;

      // Send the form data to the API
      this.http.post(this.url, formData).subscribe({
        next: () => {
          this.clientMessage ="Thank You, You'll be contacted in 24 hours";
        },
        error: () => {
          this.clientMessage="Oops, Seems the message did'nt get sent.\n\n Please try again ";
        }
      });
    
  }

 
}
