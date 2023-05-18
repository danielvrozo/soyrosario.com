import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';



import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/resources/header/header.component';
import { FooterComponent } from './modules/resources/footer/footer.component';
import { AboutWgComponent } from './shared-ui/about-wg/about-wg.component';
import { ModalVideoComponent } from './shared-ui/modal-video/modal-video.component';
import { SocialMediaComponent } from './shared-ui/social-media/social-media.component';
import { NoticiasDestacadasComponent } from './shared-ui/noticias-destacadas/noticias-destacadas.component';
import { TimeCompanyComponent } from './shared-ui/time-company/time-company.component';
import { ProgramsGobiernoComponent } from './shared-ui/programs-gobierno/programs-gobierno.component';
import { FramesRedesComponent } from './shared-ui/frames-redes/frames-redes.component';
import { NoticiasComponent } from './modules/noticias/noticias.component';
import { HttpClientModule } from '@angular/common/http';
import { FechaLetras } from './class/fecha-letras';
import { NoticiaGetComponent } from './modules/noticia-get/noticia-get.component';
import { GobiernoGetComponent } from './modules/gobierno-get/gobierno-get.component';
import { GobiernoComponent } from './modules/gobierno/gobierno.component';
import { BiografiaComponent } from './modules/biografia/biografia.component';
import { DecodeHtmlPipe } from './pipe/decode-html.pipe';
import { HomeAdminComponent } from './modules/admin/home-admin/home-admin.component';
import { HeaderAdminComponent } from './modules/admin/resources/header-admin/header-admin.component';
import { EditarHomeComponent } from './modules/admin/home-admin/crud/editar-home/editar-home.component';
import { BiografiaAdminComponent } from './modules/admin/biografia-admin/biografia-admin.component';
import { EditarBioComponent } from './modules/admin/biografia-admin/crud/editar-bio/editar-bio.component';
import { GobiernoAdminComponent } from './modules/admin/gobierno-admin/gobierno-admin.component';
import { GobiernoCreateComponent } from './modules/admin/gobierno-admin/crud/gobierno-create/gobierno-create.component';
import { GobiernoUpdateComponent } from './modules/admin/gobierno-admin/crud/gobierno-update/gobierno-update.component';
import { GobiernoDeleteComponent } from './modules/admin/gobierno-admin/crud/gobierno-delete/gobierno-delete.component';
import { NoticiasAdminComponent } from './modules/admin/noticias-admin/noticias-admin.component';
import { NoticiasCreateComponent } from './modules/admin/noticias-admin/crud/noticias-create/noticias-create.component';
import { NoticiasUpdateComponent } from './modules/admin/noticias-admin/crud/noticias-update/noticias-update.component';
import { NoticiasDeleteComponent } from './modules/admin/noticias-admin/crud/noticias-delete/noticias-delete.component';
import { CrudMeComponent } from './modules/admin/home-admin/crud-me/crud-me.component';
import { CrudEditarComponent } from './modules/admin/home-admin/crud-editar/crud-editar.component';

@NgModule({
  declarations: [
    DecodeHtmlPipe,
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutWgComponent,
    ModalVideoComponent,
    SocialMediaComponent,
    NoticiasDestacadasComponent,
    TimeCompanyComponent,
    ProgramsGobiernoComponent,
    FramesRedesComponent,
    NoticiasComponent,
    NoticiaGetComponent,
    GobiernoGetComponent,
    GobiernoComponent,
    BiografiaComponent,
    HomeAdminComponent,
    HeaderAdminComponent,
    EditarHomeComponent,
    BiografiaAdminComponent,
    EditarBioComponent,
    GobiernoAdminComponent,
    GobiernoCreateComponent,
    GobiernoUpdateComponent,
    GobiernoDeleteComponent,
    NoticiasAdminComponent,
    NoticiasCreateComponent,
    NoticiasUpdateComponent,
    NoticiasDeleteComponent,
    CrudMeComponent,
    CrudEditarComponent
  ],
  imports: [
    BrowserModule,
    EditorModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FechaLetras, { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
