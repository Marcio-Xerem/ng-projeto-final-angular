import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

type DogBreed = {
  id: string;
  name: string;
};

type CatBreed = {
  id: string;
  name: string;
};

@Component({
  selector: 'app-lista-json',
  imports: [CommonModule],
  templateUrl: './lista-json.component.html',
  styleUrls: ['./lista-json.component.css']
})
export class ListaJsonComponent {
  dogBreeds: DogBreed[] = [];
  catBreeds: CatBreed[] = [];

  constructor(private http: HttpClient) { }

  buscarDogBreeds() {
    const dogApiUrl = 'https://api.thedogapi.com/v1/breeds';
    this.http.get<DogBreed[]>(dogApiUrl).subscribe(
      (response) => {
        this.dogBreeds = response;
      },
    );
  }

  buscarCatBreeds() {
    const catApiUrl = 'https://api.thecatapi.com/v1/breeds';
    this.http.get<CatBreed[]>(catApiUrl).subscribe(
      (response) => {
        this.catBreeds = response;
      },
    );
  }
}
