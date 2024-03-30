"use strict";
class Job {
    role = "";
    _salary = 0;
    constructor(role = 'главный начальник', salary) {
        this.role = role;
        this._salary = salary;
    }
    get salary() {
        return this._salary;
    }
    work(personName) {
        console.log(`'${personName}' сейчас работает как '${this.role}' на ставке ${this.salary}$/h`);
    }
}
const j0 = new Job('role0', 100_000);
j0.work('Иванов');
class Person {
    _job;
    name = 'noname';
    constructor(name) {
        if (name)
            this.name = name;
    }
    set job(val) {
        this._job = val;
    }
    getSalary() {
        if (this._job)
            return this._job.salary;
        return 0;
    }
    work() {
        if (this._job)
            this._job.work(this.name);
    }
}
const p1 = new Person('Person1');
const p2 = new Person('Person2');
const j1 = new Job('role1', 151_000);
const j2 = new Job('role2', 251_000);
const j3 = new Job('role3', 352_000);
p1.job = j1;
p1.work();
p2.job = j2;
p2.work();
p2.job = j3;
p2.work();
