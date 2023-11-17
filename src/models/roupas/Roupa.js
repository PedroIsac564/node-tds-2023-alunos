import { emit } from "nodemon"

export class Roupa {
    constructor(nome, tipo, tamanho, cor, quantidade, imagemUrl) {
        this.id = parseFloat(Math.random() * 9999);
        this.nome = nome;
        this.tipo = tipo;
        this.tamanho = tamanho;
        this.cor = cor;
        this.quantidade = quantidade;
        this.imagemUrl = imagemUrl;
    }
}