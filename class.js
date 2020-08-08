class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.school = 'kalimunnesa school';
    }
}

const student1 = new Student(12, 'Shuvo');
const student2 = new Student(32, 'Kartik');
console.log(student1, student2);