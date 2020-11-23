class User {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    //shorthand: constructor(public name: string, public age: number){}
}

const ivan = new User("Ivan",20);