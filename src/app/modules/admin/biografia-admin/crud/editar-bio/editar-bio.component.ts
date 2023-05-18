import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BiografiaService } from 'src/app/apis/biografia/get/biografia.service';
import { BiografiaUpService } from 'src/app/apis/biografia/update}/biografia-up.service';

@Component({
  selector: 'app-editar-bio',
  templateUrl: './editar-bio.component.html',
  styleUrls: ['./editar-bio.component.css', '../../../admin.styles.css']
})
export class EditarBioComponent implements OnInit {

  show = false;
  body:any;
  response:any = {};
  code:any;
  constructor(
    private _ApiBiografia: BiografiaService,
    private _ApiUpdateBiografia: BiografiaUpService
  ){
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarInfoBanner();
  }

  MostrarInfoBanner(){
    this._ApiBiografia.ALL_GET('?id=1').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;

      this.response = {
        titulo: this.body[0]['titulo'],
        descripcion: this.body[0]['descripcion']
      }
    });
  }

  Save(form: NgForm){

    this._ApiUpdateBiografia.UPDATE(
      {
        titulo: form.form.controls['titulo']['value'],
        descripcion: form.form.controls['descripcion']['value'],
      }
    ).subscribe((data) => {
      this.code = true;
      setTimeout(() => {
        this.code = false;
      }, 5000);
    })
  }

}
