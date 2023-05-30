import { Component, OnInit } from '@angular/core';
import { ContactoAllService } from 'src/app/apis/contacto/contacto-all.service';

@Component({
  selector: 'app-contacto-admin',
  templateUrl: './contacto-admin.component.html',
  styleUrls: ['./contacto-admin.component.css', '../admin.styles.css']
})
export class ContactoAdminComponent implements OnInit {

  show = false;
  body:any;
  constructor(
    private _Api: ContactoAllService
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      window.scroll(0,0);
    }, 200);
    this.Mostrar();
  }

  Mostrar(){
    this._Api.ALL('?id=ALL').subscribe((data) => {
      this.show = true;
      this.body = data.body.content;
    });
  }

}
