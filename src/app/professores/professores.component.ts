import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';
  public professores = [
    {Nome: 'Maria'},
    {Nome: 'Francisca'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
