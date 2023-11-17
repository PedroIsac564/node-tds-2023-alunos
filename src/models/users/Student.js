import { emit } from "nodemon"

export class Student {
    constructor(name, email, age) {
        this.id = parseFloat(Math.random() * 9999);
        this.name = name;
        this.email = email;
        this.age = age;
    }
}