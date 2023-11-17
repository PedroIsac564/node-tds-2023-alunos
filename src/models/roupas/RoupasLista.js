export class RoupaLista {
    constructor() {
        this.roupas = [];
    }
    getAllRoupas() {
        return this.roupas;
    }
    addRoupa(roupa) {
        this.roupas.push(roupa)
    }
    getRoupa(id) {
        return this.roupas.find((roupa) => roupa === id)
    }
    updateRoupa(id, nome, tamanho, cor, quantidade, imagemUrl) {
        this.roupas = this.roupas.map((roupa) => {
            if (roupa.id === id) {
                roupa.nome = nome;
                roupa.tamanho = tamanho;
                roupa.cor = cor;
                roupa.quantidade = quantidade;
                roupa.imagemUrl = imagemUrl;
            }
            return this.getRoupa(id)
        });
    }
    removeRoupa(id) {
        this.roupas = this.roupas.filter((roupa) => roupa.id !== id);
    }

    getLengthRoupa() {
        return this.roupas.length;
    }

    getRoupaByType(tipo) {
        return this.roupas.filter((roupa) => roupa.tipo === tipo)
    }

    getRoupaByColor(cor) {
        return this.roupas.filter((roupa) => roupa.cor === cor)
    }

    getRoupaBySize(tamanho) {
        return this.roupas.filter((roupa) => roupa.tamanho === tamanho)
    }

    getRoupaBySizeType(tamanho, tipo) {
        return this.roupas.filter((roupa) => roupa.tamanho === tamanho && roupa.tipo === tipo)
    }

}