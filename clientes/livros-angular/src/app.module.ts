import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ControleEditoraService } from './app/controle-editora.service';
import { ControleLivrosService } from './app/controle-livros.service';
import { LivroListaComponent } from './app/livro-lista/livro-lista.component';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';


@NgModule({
    declarations: [
        AppComponent,
        LivroListaComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,

    ],
    providers: [ControleEditoraService, ControleLivrosService],
    bootstrap: [AppComponent]
})
export class AppModule { }
