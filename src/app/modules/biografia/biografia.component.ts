import { Component, OnInit } from '@angular/core';
import { BiografiaService } from 'src/app/apis/biografia/get/biografia.service';
import { AllNoticiasService } from 'src/app/apis/noticias/all/all-noticias.service';
import { FechaLetras } from 'src/app/class/fecha-letras';

@Component({
  selector: 'app-biografia',
  templateUrl: './biografia.component.html',
  styleUrls: ['./biografia.component.css']
})
export class BiografiaComponent implements OnInit {
  titulo:any;
  imagen:any;
  pdf:any;
  descripcion:any;
  fecha:any;
  ultimas_noticias:any;
  constructor(
    private _ApiBiografia: BiografiaService,
    private _ApiAllNoticias: AllNoticiasService,
    private _FechaLetras: FechaLetras,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarBiografia();
    this.UltimasNoticias();
  }

  MostrarBiografia(){
    this._ApiBiografia.ALL_GET('?id=1').subscribe((data) => {
      this.titulo = data.body.content[0].titulo;
      this.imagen = "https://soyrosario.com.co/soyrosario/uploads/"+data.body.content[0].imagen_url;
      this.pdf = "https://soyrosario.com.co/soyrosario/uploads/"+data.body.content[0].pdf_url;
      this.descripcion = data.body.content[0].descripcion;
      this.fecha = data.body.content[0].fecha;
    });
  }

  UltimasNoticias(){
    this._ApiAllNoticias.ALL_GET_NOTICIAS('?id=ALL&items=3').subscribe((data) => {
      this.ultimas_noticias = data.body.content;
    });
  }


  getFechaLetas(fecha:any){
    return this._FechaLetras.transform(fecha);
  }

}
