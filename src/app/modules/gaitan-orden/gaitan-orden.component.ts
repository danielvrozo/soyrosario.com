import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AllNoticiasService } from 'src/app/apis/noticias/all/all-noticias.service';

@Component({
  selector: 'app-gaitan-orden',
  templateUrl: './gaitan-orden.component.html',
  styleUrls: ['./gaitan-orden.component.css']
})
export class GaitanOrdenComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef?: ElementRef;
  @ViewChild('downloadLink', { static: true }) downloadLinkRef?: ElementRef;

  nombreUsuario: any = '';
  ultimas_noticias:any;

  constructor(
    private _ApiAllNoticias: AllNoticiasService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      window.scroll(0,0);
    }, 400);
    this.UltimasNoticias();
    this.crearImagenPersonalizada();
    
  }

  crearImagenPersonalizada() {
    const canvas: HTMLCanvasElement = this.canvasRef?.nativeElement;
    const ctx:any = canvas.getContext('2d');
    let size_name:any;

    if (this.nombreUsuario.length > 15) {
      size_name = '45px';
    } else if (this.nombreUsuario.length > 13) {
      size_name = '55px';
    }else if (this.nombreUsuario.length > 11) {
      size_name = '60px';
    } else if (this.nombreUsuario.length > 9) {
      size_name = '65px';
    } else if (this.nombreUsuario.length > 7) {
      size_name = '70px';
    } else {
      size_name = '75px';
    }

    // Configurar el canvas para una imagen de 500x500 píxeles
    canvas.width = 500;
    canvas.height = 500;

    // Cargar la imagen por defecto
    const imagenDefault = new Image();
    imagenDefault.src = '../../../assets/images/desings/yo-quiero-un-gaitan-en-orden.jpg';

    imagenDefault.onload = () => {
      // Dibujar la imagen escalada a 500x500 píxeles
      ctx.drawImage(imagenDefault, 0, 0, canvas.width, canvas.height);

      // Agregar el div con el texto centrado
      const divWidth = 395;
      const divHeight = 94;
      const divX = 52;
      const divY = 198;

      ctx.fillStyle = 'transparent'; // Fondo del div semi-transparente
      ctx.fillRect(divX, divY, divWidth, divHeight);

      ctx.font = `bold ${size_name} Ubuntu`; 
      ctx.fillStyle = '#6b429a';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.nombreUsuario, divX + divWidth / 2, divY + divHeight / 2);

      // Convertir el contenido del canvas en una URL de datos
      const dataURL = canvas.toDataURL('image/jpg');

      // Actualizar el atributo href del enlace de descarga
      const downloadLink: HTMLAnchorElement = this.downloadLinkRef?.nativeElement;
      downloadLink.href = dataURL;
 
      // Mostrar y activar el enlace de descarga
      downloadLink.style.display = 'block';
    };
  }

  UltimasNoticias(){
    this._ApiAllNoticias.ALL_GET_NOTICIAS('?id=ALL&items=3').subscribe((data) => {
      this.ultimas_noticias = data.body.content;
    });
  }

}
