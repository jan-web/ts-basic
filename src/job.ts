class Job {
  private role: string = "";
  private _salary: number = 0;

  constructor(role: string = 'главный начальник', salary: number) {
    this.role = role
    this._salary = salary
  }

  get salary(): number {
    return this._salary;
  }

  work(personName: string): void {
    console.log(`'${personName}' сейчас работает как '${this.role}' на ставке ${this.salary}$/h`);
  }
}

const j0 = new Job('role0', 100_000);
j0.work('Иванов')


class Person {
  private _job: Job | undefined;
  private name: string = 'noname';

  constructor(name?: string){
    if(name) this.name = name;
  }

  set job(val: Job){
    this._job = val
  }

  getSalary(): number {
    if(this._job) return this._job.salary
    return 0
  }

  work(): void {
    if(this._job) this._job.work(this.name)
  }
}

const p1 = new Person('Person1')
const p2 = new Person('Person2')

const j1 = new Job('role1', 151_000);
const j2 = new Job('role2', 251_000);
const j3 = new Job('role3', 352_000);

p1.job = j1
p1.work()

p2.job = j2
p2.work()

p2.job = j3
p2.work()