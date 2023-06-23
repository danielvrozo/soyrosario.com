import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { NoticiasComponent } from './modules/noticias/noticias.component';
import { NoticiaGetComponent } from './modules/noticia-get/noticia-get.component';
import { GobiernoGetComponent } from './modules/gobierno-get/gobierno-get.component';
import { GobiernoComponent } from './modules/gobierno/gobierno.component';
import { BiografiaComponent } from './modules/biografia/biografia.component';
import { HomeAdminComponent } from './modules/admin/home-admin/home-admin.component';
import { EditarHomeComponent } from './modules/admin/home-admin/crud/editar-home/editar-home.component';
import { BiografiaAdminComponent } from './modules/admin/biografia-admin/biografia-admin.component';
import { EditarBioComponent } from './modules/admin/biografia-admin/crud/editar-bio/editar-bio.component';
import { GobiernoAdminComponent } from './modules/admin/gobierno-admin/gobierno-admin.component';
import { GobiernoCreateComponent } from './modules/admin/gobierno-admin/crud/gobierno-create/gobierno-create.component';
import { GobiernoDeleteComponent } from './modules/admin/gobierno-admin/crud/gobierno-delete/gobierno-delete.component';
import { GobiernoUpdateComponent } from './modules/admin/gobierno-admin/crud/gobierno-update/gobierno-update.component';
import { NoticiasCreateComponent } from './modules/admin/noticias-admin/crud/noticias-create/noticias-create.component';
import { NoticiasDeleteComponent } from './modules/admin/noticias-admin/crud/noticias-delete/noticias-delete.component';
import { NoticiasUpdateComponent } from './modules/admin/noticias-admin/crud/noticias-update/noticias-update.component';
import { NoticiasAdminComponent } from './modules/admin/noticias-admin/noticias-admin.component';
import { CrudMeComponent } from './modules/admin/home-admin/crud-me/crud-me.component';
import { CrudEditarComponent } from './modules/admin/home-admin/crud-editar/crud-editar.component';
import { RedesAdminComponent } from './modules/admin/redes-admin/redes-admin.component';
import { RedesCreateComponent } from './modules/admin/redes-admin/crud/redes-create/redes-create.component';
import { RedesUpdateComponent } from './modules/admin/redes-admin/crud/redes-update/redes-update.component';
import { RedesDeleteComponent } from './modules/admin/redes-admin/crud/redes-delete/redes-delete.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ContactoAdminComponent } from './modules/admin/contacto-admin/contacto-admin.component';
import { GaleriaCreateComponent } from './modules/admin/galeria-admin/crud/galeria-create/galeria-create.component';
import { GaleriaDeleteComponent } from './modules/admin/galeria-admin/crud/galeria-delete/galeria-delete.component';
import { GaleriaUpdateComponent } from './modules/admin/galeria-admin/crud/galeria-update/galeria-update.component';
import { GaleriaAdminComponent } from './modules/admin/galeria-admin/galeria-admin.component';
import { GaleriaGetComponent } from './modules/galeria-get/galeria-get.component';
import { LoginComponent } from './modules/admin/login/login.component';
import { EditarMaterialesComponent } from './modules/admin/materiales-admin/crud/editar-materiales/editar-materiales.component';
import { MaterialesAdminComponent } from './modules/admin/materiales-admin/materiales-admin.component';
import { MaterialesComponent } from './modules/materiales/materiales.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quien-soy', component: BiografiaComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'contactenos', component:ContactComponent },
  { path: 'material-de-campaña', component:MaterialesComponent },
  { path: 'noticias/noticia/:id', component: NoticiaGetComponent },
  { path: 'gobiernos', component: GobiernoComponent },
  { path: 'gobiernos/gobierno/:id', component: GobiernoGetComponent },
  { path: 'galeria/:id', component: GaleriaGetComponent },
  /* Admin */
  { path: 'admin/home', component: HomeAdminComponent },
  { path: 'admin/home/editar', component: EditarHomeComponent },
  { path: 'admin/home/me/editar', component: CrudMeComponent },
  { path: 'admin/home/video/editar/:id', component: CrudEditarComponent },
  /*  */
  { path: 'admin/quiensoy', component: BiografiaAdminComponent },
  { path: 'admin/quiensoy/editar', component: EditarBioComponent },

  { path: 'admin/materiales', component: MaterialesAdminComponent },
  { path: 'admin/materiales/editar', component: EditarMaterialesComponent },
  /*  */
  { path: 'admin/gobierno', component: GobiernoAdminComponent},
  { path: 'admin/gobierno/crear', component: GobiernoCreateComponent},
  { path: 'admin/gobierno/editar/:id', component: GobiernoUpdateComponent},
  { path: 'admin/gobierno/eliimnar/:id', component: GobiernoDeleteComponent},
  /*  */
  { path: 'admin/noticias', component: NoticiasAdminComponent},
  { path: 'admin/noticias/crear', component: NoticiasCreateComponent},
  { path: 'admin/noticias/editar/:id', component: NoticiasUpdateComponent},
  { path: 'admin/noticias/eliimnar/:id', component: NoticiasDeleteComponent},

  /*  */
  { path: 'admin/redes', component: RedesAdminComponent},
  { path: 'admin/redes/crear', component: RedesCreateComponent},
  { path: 'admin/redes/editar/:id', component: RedesUpdateComponent},
  { path: 'admin/redes/eliimnar/:id', component: RedesDeleteComponent},

  /*  */
  { path: 'admin/galeria', component: GaleriaAdminComponent},
  { path: 'admin/galeria/crear', component: GaleriaCreateComponent},
  { path: 'admin/galeria/editar/:id', component: GaleriaUpdateComponent},
  { path: 'admin/galeria/eliimnar/:id', component: GaleriaDeleteComponent},

  /*  */
  { path: 'admin/contacto', component: ContactoAdminComponent},
  { path: 'admin/login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
