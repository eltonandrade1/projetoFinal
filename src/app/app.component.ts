import { Component } from '@angular/core';
import { ContatosDataBaseService } from './service/contatos-data-base.service';
import { ContatoModel } from './model/contato-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto de Contatos com Angular 2';

  contatoclicado: ContatoModel;
  
  constructor(private dataBaseService: ContatosDataBaseService) {}

  enviarDetalhe(id): void {
    this.contatoclicado = this.dataBaseService.getContato(id);
  }
}
