import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teorema-form-cateto-adjascente',
  templateUrl: './teorema-form-cateto-adjascente.component.html',
  styleUrls: ['./teorema-form-cateto-adjascente.component.css']
})
export class TeoremaFormCatetoAdjascenteComponent implements OnInit {
  
  adjacente!: number;
  hipotenusa!: number;
  oposto!: number;
  resultadoAdjacente!: number;

  constructor() { }

  ngOnInit(): void {
  }
  
  teorema(): number{
    let oposto = this.oposto;
    let hipotenusa = this.hipotenusa;
    
    this.adjacente = (hipotenusa ** 2) - (oposto ** 2);
    this.resultadoAdjacente = Math.sqrt(this.adjacente);

    event?.preventDefault();
    return this.resultadoAdjacente;
  }
}
