import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos';
  
  public alunos = [
    { Nome: 'Igor'},
    { Nome: 'Joao'}

  ];

  constructor() { 


  }

  ngOnInit(): void {
  }

}
