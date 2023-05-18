import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MeGetService } from 'src/app/apis/me/get/me-get.service';

@Component({
  selector: 'app-crud-me',
  templateUrl: './crud-me.component.html',
  styleUrls: ['./crud-me.component.css', '../../admin.styles.css']
})
export class CrudMeComponent implements OnInit {

  show = false;
  body:any;
  response:any = {};
  code:any;
  constructor(
    private _Api: MeGetService
  ){
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.MostrarInfoBanner();
  }

  MostrarInfoBanner(){
    this._Api.GET_SHORT('?id=1').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;

      this.response = {
        titulo: this.body[0]['titulo'],
        descripcion: this.body[0]['descripcion']
      }
    });
  }

  Save(form: NgForm){

    this._Api.UPDATE(
      {
        titulo: form.form.controls['titulo']['value'],
        descripcion: form.form.controls['descripcion']['value']
      }
    ).subscribe((data) => {
      this.code = true;
      setTimeout(() => {
        this.code = false;
      }, 5000);
    })
  }

}
