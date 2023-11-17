import { Router } from "express";
import { Student } from "../models/users/Student.js";
import { StudentList } from "../models/users/StudentsList.js";

const list = new StudentList();

export const getStudents = (req, res) => {
    const students = list.getAllStudents();

    if (students.lengh) {
        return res.status(200).send(students);
    }

    return res.status(200).send({
        message: "Não ha alunos cadastrados"
    });
};

export const getStudentById = (req, res) => {
    const { id } = req.params;
    const student = list.getStudent(id);

    if (!student) {
        return res.status(404).send({
            message: "Aluno não encontrado"
        })
    }
    return res.status(200).send(student);
};

export const createStudent = (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).
            send({
                message: "Parâmetros inválidos",
            });
    }
    const student = new Student(name, email, age);
    list.addStudent(student);
    return res.status(200).
        send({ message: "Aluno criado com sucesso", student, }
        );
};

export const updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    if (!name || !email || !age)
        return res.status(400).send({ message: `Parâmetros inválidos` });

    const student = list.getStudent(id);

    if (!student) {
        return res.status(404).send({
            message: "Aluno não encontrado",
        })
    }

    const updateStudent = list.updateStudent(id, name, age, email)

    return res.status(200).send({
        message: "aluno atualizado com sucesso", student,
    })
}

export const deleteStudent = (req, res) => {
    const { id } = req.params;

    const student = list.getStudentById(id);

    if (!student) {
        return res.status(404).send({
            message: "Aluno não encontrado"
        })
    }

    list.removeStudent(id);
    return res.status(200).send({
        message: `aluno removido com sucesso`, student,
    })
}