import { Component, OnInit } from '@angular/core';
import { AllNoticiasService } from 'src/app/apis/noticias/all/all-noticias.service';
import { FechaLetras } from 'src/app/class/fecha-letras';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias:any;
  constructor(
    private _ApiAllNoticias: AllNoticiasService,
    private _FechaLetras: FechaLetras
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarTodasLasNoticias();
  }

  MostrarTodasLasNoticias(){
    this._ApiAllNoticias.ALL_GET_NOTICIAS('?id=ALL').subscribe((data) => {
      this.noticias = data.body.content;
    });
  }

  getFechaLetas(fecha:any){
    return this._FechaLetras.transform(fecha);
  }

  recortarDescripcion(descripcion: string, maxLength: number): string {
    const plainText = this.stripHtmlTags(descripcion);
    if (plainText.length <= maxLength) {
      return plainText;
    } else {
      return plainText.slice(0, maxLength) + '...';
    }
  }

  stripHtmlTags(html: string): string {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  }
  
}
