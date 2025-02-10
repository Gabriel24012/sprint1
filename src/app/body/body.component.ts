import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  imagen:string="img/Casa portada.webp";
  huespedes:number= 1;
  noches:number=1;
  extras:number=0;
  total:number=1000;

  colocarImagen(num:number):void{

    switch(num){
      case 1: this.imagen="img/Casa portada.webp";break;
      case 2: this.imagen="img/sala.jpg";break;
      case 3: this.imagen="img/recámara.webp";break;
    }
  }

  calcularTotal() {
    this.total = (this.huespedes * 1000) + (this.noches * 500) + this.extras;
  }

  cambiarHuepedes(valor:number){

    if(this.huespedes + valor >=1){
      this.huespedes +=valor;
      this.calcularTotal(); 
    }
  }

  cambiarNoches(valor:number){
    if(this.noches + valor>=1){
      this.noches +=valor;
      this.calcularTotal();
    }
  }

  sumarExtra(event:any,costo:number){
    if(event.target.checked){
      this.extras += costo;
    }else{
      this.extras -=costo;
    }
    this.calcularTotal();
  }

}

