export class StudentList {
    constructor() {
        this.students = [];
    }
    getAllStudents() {
        return this.students;
    }
    addStudent(student) {
        this.students.push(student)
    }
    getStudent(id) {
        return this.students.find((student) => student === id)
    }
    updateStundent(id, name, age, email) {
        this.students = this.students.map((student) => {
            if (student.id === id) {
                student.name = name;
                student.age = age;
                student.email = email;
            }
            return this.getStudent(id)
        });
    }
    removeStudent(id) {
        this.students = this.students.
            filter(student => student.id !== id);
    }

}