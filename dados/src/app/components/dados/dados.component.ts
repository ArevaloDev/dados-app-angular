import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.css'
})
export class DadosComponent {

  public dadoDerecho:string = '../assets/img/dice4.png';
  public dadoIzquiero = '../assets/img/dice1.png';
  public numero1:number = 0;
  public numero2:number = 0;

  tirarDados = ():void => {

    this.numero1 = Math.floor(Math.random() * 6) + 1;
    this.numero2 = Math.floor(Math.random() * 6) + 1;
    console.log(this.numero1);
    console.log(this.numero2);

  }

}
