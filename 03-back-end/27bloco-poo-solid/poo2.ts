export class Person {
  constructor(private _name: string, private _birthday: string) {}

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  get birthday(): string {
    return this._birthday;
  }
  set birthday(value: string) {
    this._birthday = value;
  }
}

export class Student extends Person {
  private _enrollment: string;
  constructor(name: string, birthday: string) {
    super(name, birthday);
    this._enrollment = this.generateEnrollment();
  }
  private generateEnrollment(): string {
    return `${this.name} - ${this.birthday}`;
  }
}

const student1 = new Student("João", "01/01/2000");
console.log(student1);
