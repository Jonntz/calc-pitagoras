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
    
    if (oposto == null && hipotenusa == null) {
      alert("Preencha todos os campos");
    }else{
      this.adjacente = (hipotenusa ** 2) - (oposto ** 2);
      if(this.adjacente < 0){
        alert("Este triângulo não é pitagórico!");
      } else {
        this.resultadoAdjacente = Math.sqrt(this.adjacente);
      }
    }

    event?.preventDefault();
    return this.resultadoAdjacente;
  }
}
