import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hipotenusa',
  templateUrl: './hipotenusa.component.html',
  styleUrls: ['./hipotenusa.component.css']
})
export class HipotenusaComponent implements OnInit {
  
  adjacente!: number;
  hipotenusa!: number;
  oposto!: number;
  resultadoHipotenusa!: number;

  constructor() { }

  ngOnInit(): void {
  }
  
  teorema(): number{
    let oposto = this.oposto;
    let adjacente = this.adjacente;
    
    if (oposto == null && adjacente == null) {
      alert("Preencha todos os campos");
    }else{
      this.hipotenusa = (oposto ** 2) + (adjacente ** 2);
      this.resultadoHipotenusa = Math.sqrt(this.hipotenusa);
    }

    event?.preventDefault();
    return this.resultadoHipotenusa;
  }
}
