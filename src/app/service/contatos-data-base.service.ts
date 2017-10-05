import { ContatoModel } from '../model/contato-model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ContatosDataBaseService {

  meusContatos: ContatoModel[] = [];
  enviarContato = new EventEmitter();

  constructor() { }

  setContato(novoContato: ContatoModel): void {
    this.meusContatos.push(novoContato);
    this.enviarContato.emit(this.meusContatos);
  }
  
  getContato(id: number): ContatoModel {
//    let contato: ContatoModel;
    return this.meusContatos[id];
  }

}
