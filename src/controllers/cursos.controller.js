import { Router } from "express";

export const getCursos = (req, res) => {
    return res.status(200).send({
        message:"Get all students controller"
    });
};

export const getCursosById = (req, res) => {
    const {id} = req.params
    return res.status(200).send({
        message:`Get student with id ${id} controller`
    });
};

export const createCurso = (req, res) => {
    const { nome, descricao, preco } = req.body;

    preco > 600
    ? res.status(201).send({
        message:`O curso é caro`
    })
    : res.status(201).send({
        message:`Curso é barato`
    })

    if(!nome || !descricao || !preco){
        return res.status(400).send({
            message: `Está faltando informações`
        });
    }
    return res.status(200).send({
        message: `Cadastro feito para o curso ${nome}, da descrição ${descricao} do preço:R$${preco}`
    });
};

export const updateCurso = (req,res) => {
    const {id} = req.params;
    const {nome, descricao, preço} = req.body;
    return res.status(200).send({message: `Curso atualizado pelo id ${id} do ${nome} ${descricao} ${preço} com o controller`})
}

export const deleteCurso = (req, res) => {
    const {id} = req.params;
    return res.status(200).send({message:`Curso deletado com esse id ${id}`})
}