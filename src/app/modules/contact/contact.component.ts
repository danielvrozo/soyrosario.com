import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactoAllService } from 'src/app/apis/contacto/contacto-all.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  code:any;
  error:any;

  nombre:any;
  correo:any;
  celular:any;
  mensaje:any;
  
  opacity:any = 1;
  constructor(
    private _Api: ContactoAllService,
  ){
  }

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
  }

  Save(form: NgForm){
    if(form.invalid){
      this.error = true;
        this.opacity = 1;
        setTimeout(() => {
          this.error = false;
        }, 5000);
    } else {
      this.opacity = .5;
      let formData = new FormData();

      formData.append('nombre', form.value.nombre);
      formData.append('correo', form.value.correo);
      formData.append('celular', form.value.celular);
      formData.append('mensaje', form.value.mensaje);

      this._Api.CREATE(formData).subscribe((data) => {
        this.code = true;
        this.opacity = 1;
        setTimeout(() => {
          this.code = false;
        }, 5000);
      });
    }
  }

}
