import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'albertojilo-ang-basic-ud35-02';

  nombre: string='';
  email: string = '';
  mensaje: string = '';
  captcha:string = '';
  numero1:number=0;
  numero2:number=0;
  resultado:string='';
  captchaCheck:boolean=true;
  listaUsuarios:any =[];



  constructor(){

  }

  //En el init generaremos dos numeros para el captcha.

  ngOnInit(): void {
    this.numero1 = Math.trunc(Math.random()*10)+1;
    this.numero2 = Math.trunc(Math.random()*10)+1;
    this.resultado = (this.numero1 + this.numero2).toString();
  }


  enviar(){

    //Solo llenaremos los datos en caso de que el captcha sea correcto

    if(this.captcha==this.resultado
      && this.nombre!=''
      && this.email!=''
      && this.mensaje!=''){
      this.captchaCheck=true;
      let usuario = {nombre:this.nombre, email:this.email, mensaje:this.mensaje};
      this.listaUsuarios.push(usuario);
    }
    if(this.captcha!=this.resultado){
      this.captchaCheck=false;
    }

  }
}
