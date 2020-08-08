class Parent {
    constructor() {
        this.fatherName = "Schwarznegger";
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    } 
    getFullName() {
        return this.name + ' ' + this.fatherName;
    }
}

const child1 = new Child('Tom');
const child2 = new Child('Arnold');
console.log(child1.getFullName());
console.log(child2);