import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type CatDetails = {
  id: string;
  name: string;
  temperament: string;
  origin?: string;
  description?: string;
  reference_image_id?: string;
  image?: { url: string };
};

@Component({
  selector: 'app-cat-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent {
  catId: string = '';
  catDetails: CatDetails | null = null;

  constructor(private http: HttpClient) { }

  buscarDadosCat() {
    const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${this.catId}`;
    this.http.get<CatDetails[]>(apiUrl).subscribe(response => {
      if (response.length > 0) {
        const cat = response[0];
        this.catDetails = cat;

        if (cat.reference_image_id) {
          this.catDetails.image = {
            url: `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
          };
        }
      } else {
        this.catDetails = null;
        alert('Nenhuma raça encontrada com o termo fornecido!');
      }
    },
    );
  }
}
