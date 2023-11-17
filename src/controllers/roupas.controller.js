import { Roupa } from "../models/roupas/Roupa.js";
import { RoupaLista } from "../models/roupas/RoupasLista.js";

const list = new RoupaLista();

export const getRoupas = (req, res) => {
    const roupas = list.getAllRoupas();
    if (roupas !== 0) {
        return res.status(200).send({roupas});
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

    if (!nome || !tipo || !tamanho || !cor || !quantidade || !imagemUrl) {
        return res.status(400).
            send({
                message: "Parâmetros inválidos",
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
