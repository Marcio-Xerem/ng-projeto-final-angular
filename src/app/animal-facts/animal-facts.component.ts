import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type RespostaApiCuriosidades = {
  data: string[];
};

@Component({
  selector: 'animal-facts.component',
  templateUrl: './animal-facts.component.html',
  styleUrls: ['./animal-facts.component.css'],
  imports: [CommonModule, FormsModule]
})
export class AnimalFactsComponent {
  _curiosidade: string = '';

  constructor(private http: HttpClient) { }

  buscarCuriosidade() {
    const apiUrl = 'https://meowfacts.herokuapp.com/';
    this.http.get<RespostaApiCuriosidades>(apiUrl).subscribe(
      resposta => {
        this._curiosidade = resposta.data[0];
      },
    );
  }
}
