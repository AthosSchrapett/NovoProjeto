import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})

export class NavComponent implements OnInit {

  listar: any[];
  limit: 10;
  start: 0
  //Dados
  idFuncional: number;
  nome: string;
  telefone:number;
  email: string;
  orgao: string;

  //Evento
  evento: string;
  dataEvento: Date;
  horaEvento: number;
  duracaoEvento: number;
  publicoAlvo: string;
  pauta: string;
  numParticipantes: number;
  publicoAlvo2: string;
  vagasEstacionamento: number;
  responsavel: string
  //recursosNecessarios
  datashow: string;
  laptop: string;
  videoConferencia: string;
  loucaInterativa: string;
  funcaoCargo: string;
  telefoneEvento: number;
  emailEvento: string;
  finalizar = false;

  //Obs
  obs: string;

  caminho = 'routes.js';
 
  constructor(private provider: ApiService) { 
    
  }

  ngOnInit(): void {
  }

  cadastrar(){
    if(this.nome !== '' && this.telefone !== 0 && this.email !== ''){
      return new Promise(resolve => {
        const dados ={
          nome: this.nome,
          telefone: this.telefone,
          email: this.email,
          orgao: this.orgao,
          //Evento
          evento: this.evento,
          dataEvento: this.dataEvento,
          horaEvento: this.horaEvento,
          duracaoEvento: this.duracaoEvento,
          publicoAlvo: this.publicoAlvo,
          pauta: this.pauta,
          numParticipantes: this.numParticipantes,
          publicoAlvo2: this.publicoAlvo2,
          vagasEstacionamento: this.vagasEstacionamento,
          responsavel: this.responsavel,
            
          //recursosNecessarios
          datashow: this.datashow,
          laptop: this.laptop,
          videoConferencia: this.videoConferencia,
          loucaInterativa: this.loucaInterativa,
          funcaoCargo: this.funcaoCargo,
          telefoneEvento: this.telefoneEvento,
          emailEvento: this.emailEvento,

          }
        this.provider.Api(dados, this.caminho).subscribe(data => {
          if(data['success']){
            this.finalizar = true;
          }
          else{
            alert('Dados Incorretos!!');           
          }
        })
      })
    }
  }

  enviarDados(){
    if(this.finalizar === true){
      alert('Salvo com sucesso!!');
    }
  }
}

