import { Roupa } from "../models/roupas/Roupa.js";
import { RoupaLista } from "../models/roupas/RoupasLista.js";

const list = new RoupaLista();

export const getRoupas = (req, res) => {
    const roupas = list.getAllRoupas();
    if (roupas !== 0) {
        return res.status(200).send({ roupas });
    } else {
        return res.status(200).send({ message: "Não ha roupas cadastradas" });
    }
};

export const getRoupaById = (req, res) => {
    const { id } = req.params;
    const roupa = list.getRoupa(id);

    if (!roupa) {
        return res.status(404).send({
            message: "Roupa não encontrada",
        });
    }
    return res.status(200).send(roupa);

};

export const createRoupa = (req, res) => {
    const { nome, tipo, tamanho, cor, quantidade, imagemUrl } = req.body;

    if (nome.length == 0 || tipo.length == 0 || tamanho.length == 0 || cor.length == 0 || quantidade.length == 0 || imagemUrl.length == 0) {
        return res.status(400).
            send({
                message: "O campo está vazio... Por favor insira os caracteres!",
            });
    }

    if (nome.length < 6 || nome.length > 40) {
        return res.status(400).
            send({
                message: "O nome deve conter no mínimo 6 caracteres e no máximo 40 caracteres!",
            });
    }
    if (tipo.length > 50) {
        return res.status(400).
            send({
                message: "O tipo do item deve ser uma string com no máximo 50 caracteres!",
            });
    }

    if (tamanho.length > 2) {
        return res.status(400).
            send({
                message: "Por-favor, o tamanho do item deve ser apenas as strings PP, P, M, G, GG e XG.",
            });
    }

    if (cor.length > 20) {
        return res.status(400).
            send({
                message: "A cor do item deve ser uma string com no máximo 20 caracteres.",
            });
    }

    if (quantidade.length > 15000) {
        return res.status(400).
            send({
                message: "A quantidade em estoque deve ser um número inteiro positivo limitado a 15000.",
            });

    }

    if (typeof quantidade !== "number") {
        return res.status(400).
            send({
                message: "A quantidade deve ser em numero, não em string.",
            });
    }

    if (quantidade <= 0) {
        return res.status(400).
            send({
                message: "A quantidade em estoque deve ser um número maior que 0",
            });
    }

    if (isURLValid(imagemUrl) === false) {
        return res.status(400).
            send({
                message: "A URL da imagem não é válida.",
            });
    }
    const roupa = new Roupa(nome, tipo, tamanho, cor, quantidade, imagemUrl);
    list.addRoupa(roupa);
    return res.status(200).
        send({ message: "Roupa lançada com sucesso", roupa, }
        );
};

export const updateRoupa = (req, res) => {
    const { id } = req.params;
    const { nome, tipo, tamanho, cor, quantidade, imagemUrl } = req.body;

    if (!nome || !tipo || !tamanho || !cor || !quantidade || !imagemUrl)
        return res.status(400).send({ message: `Parâmetros inválidos` });

    const roupa = list.getRoupa(id);

    if (!roupa) {
        return res.status(404).send({
            message: "Roupa não encontrada",
        })
    }

    const updateRoupa = list.updateRoupa(id, nome, tipo, tamanho, cor, quantidade, imagemUrl)

    return res.status(200).send({
        message: "Roupa atualizada com sucesso", roupa,
    })
}

export const deleteRoupa = (req, res) => {
    const { id } = req.params;

    const roupa = list.getRoupaById(id);

    if (!roupa) {
        return res.status(404).send({
            message: "Roupa não encontrado"
        })
    }

    list.removeRoupa(id);
    return res.status(200).send({
        message: `Roupa removido com sucesso`, roupa,
    })
}

const isURLValid = (url) => {
    const regex = new RegExp(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g);
    return regex.test(url);
}
