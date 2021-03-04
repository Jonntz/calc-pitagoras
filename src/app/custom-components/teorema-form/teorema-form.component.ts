import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teorema-form',
  templateUrl: './teorema-form.component.html',
  styleUrls: ['./teorema-form.component.css']
})
export class TeoremaFormComponent implements OnInit {
  
  adjacente!: number;
  hipotenusa!: number;
  oposto!: number;
  resultadoOposto!: number;

  constructor() { }

  ngOnInit(): void {
  }
  
  teorema(): number{
    let adjacente = this.adjacente;
    let hipotenusa = this.hipotenusa;
    
    if (adjacente == null && hipotenusa == null) {
      alert("Preencha todos os campos");
    }else{
      this.oposto = (hipotenusa ** 2) - (adjacente ** 2);
      this.resultadoOposto = Math.sqrt(this.oposto);
    }
    
    event?.preventDefault();
    return this.resultadoOposto;
  }
}
