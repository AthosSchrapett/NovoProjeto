const { request, response } = require('express');
const express = require('express');

const testes = [];

const routes = express.Router();

routes.get('/lista', (request, response) => {
    return response.json(testes);
});

routes.post('/', (request, response) => {

    const dados = {
        nome,
        telefone,
        email,
        orgao,
        evento,
        dataEvento,
        horaEvento,
        duracaoEvento,
        publicoAlvo,
        pauta,
        numParticipantes,
        publicoAlvo2,
        vagasEstacionamento,
        responsavel: string,
        //recursosNecessarios
        datashow,
        laptop,
        videoConferencia,
        loucaInterativa,
        funcaoCargo,
        telefoneEvento,
        emailEvento,

        //Obs
        obs,
    } = request.body;

    testes.push(dados);

    return response.status(201).json(dados);
});

module.exports = routes;