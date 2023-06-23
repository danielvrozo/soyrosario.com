import { Component, OnInit } from '@angular/core';
import { BiografiaService } from 'src/app/apis/biografia/get/biografia.service';
import { MaterialesService } from 'src/app/apis/materiales/materiales.service';
import { AllNoticiasService } from 'src/app/apis/noticias/all/all-noticias.service';
import { FechaLetras } from 'src/app/class/fecha-letras';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {

  titulo:any;
  descripcion:any;
  ultimas_noticias:any;
  constructor(
    private _ApiMaterial: MaterialesService,
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
    this._ApiMaterial.GET('').subscribe((data) => {
      this.titulo = data.body.content[0].titulo;
      this.descripcion = data.body.content[0].descripcion;
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
