import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type DogDetails = {
  id: string;
  name: string;
  temperament: string;
  weight?: { metric: string };
  origin?: string;
  reference_image_id?: string;
  image?: { url: string };
};

@Component({
  selector: 'app-dog-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent {
  dogId: string = '';
  dogDetails: DogDetails | null = null;

  constructor(private http: HttpClient) { }

  buscarDadosDog() {
    const apiUrl = `https://api.thedogapi.com/v1/breeds/search?q=${this.dogId}`;
    this.http.get<DogDetails[]>(apiUrl).subscribe(response => {
      if (response.length > 0) {
        this.dogDetails = response[0];

        if (this.dogDetails.reference_image_id) {
          this.dogDetails.image = {
            url: `https://cdn2.thedogapi.com/images/${this.dogDetails.reference_image_id}.jpg`
          };
        }
      } else {
        this.dogDetails = null;
        alert('Nenhuma raça encontrada com o termo fornecido!');
      }
    },
    );
  }
}
