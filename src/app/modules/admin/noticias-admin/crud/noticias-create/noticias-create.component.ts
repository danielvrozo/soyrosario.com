import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllNoticiasService } from 'src/app/apis/noticias/all/all-noticias.service';

@Component({
  selector: 'app-noticias-create',
  templateUrl: './noticias-create.component.html',
  styleUrls: ['./noticias-create.component.css', '../../../admin.styles.css']
})
export class NoticiasCreateComponent implements OnInit {

  code:any;
  titulo:any;
  descripcion:any;
  image_url:any;
  pdf_url:any;
  opacity:any = 1;
  constructor(
    private _Api: AllNoticiasService,
  ){
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
  }

  Save(form: NgForm){
    this.opacity = .5;
    let formData = new FormData();

    formData.append('titulo', form.value.titulo);
    formData.append('descripcion', form.value.descripcion);
    formData.append('pdf_url', this.pdf_url);
    formData.append('imagen_url', this.image_url);


    this._Api.CREATE(formData).subscribe((data) => {
      this.code = true;
      this.opacity = 1;
      setTimeout(() => {
        this.code = false;
      }, 5000);
    });
  }

  onFileImgUrl(event:any): void {
    this.image_url = event.target.files[0];
  }

  onFilePDFUrl(event:any): void {
    this.pdf_url = event.target.files[0];
  }
}
