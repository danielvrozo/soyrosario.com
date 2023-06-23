import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MaterialesService } from 'src/app/apis/materiales/materiales.service';

@Component({
  selector: 'app-editar-materiales',
  templateUrl: './editar-materiales.component.html',
  styleUrls: ['./editar-materiales.component.css', '../../../admin.styles.css']
})
export class EditarMaterialesComponent implements OnInit {

  show = false;
  body:any;
  response:any = {};
  code:any;
  opacity = 1;
  constructor(
    private _Api: MaterialesService
  ){
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarInfo();
  }

  MostrarInfo(){
    this._Api.GET('').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;

      this.response = {
        titulo: this.body[0]['titulo'],
        descripcion: this.body[0]['descripcion']
      }
    });
  }

  Save(form: NgForm){
    this.opacity = .4;
    this._Api.UPDATE(
      {
        titulo: form.form.controls['titulo']['value'],
        descripcion: form.form.controls['descripcion']['value']
      }
    ).subscribe((data) => {
      this.code = true;
      this.opacity = 1;
      setTimeout(() => {
        this.code = false;
      }, 5000);
    })
  }

}
