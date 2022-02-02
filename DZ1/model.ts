enum Grade {
    exelent = "A",
    veryGood = "B",
    good = "C",
    passing = "D",
    failure = "F"
} 
type GeneralInfoType = {
    day: string;
    subjectName: string;
}
type GeneralInfoTypeGroup = {
    [key:string]: GeneralInfoType;
}

interface IUniversityWorker {
    goToMeeting:()=>void; 
}

function  goToUniMeeting(obiekt:IUniversityWorker) {  
    obiekt.goToMeeting(); 
}

function getSalary<T >(obiekt:T) {  
    console.log('Have got salary!')
}

class Person {  
    protected name: string;
    constructor(name:string) {
        this.name = name;
    }
    sayHi() {
        console.log(`I'm ${this.name} and I'm Person`);
    }
}

class Student extends Person {  
    schedule: GeneralInfoTypeGroup = this.initDefaultSchedule();
    private grade: Grade = null;
    constructor(protected name:string) {
        super(name);
    }

    initDefaultSchedule(): GeneralInfoTypeGroup{
        var obj: GeneralInfoTypeGroup = {
            "0": { "day": "Pon", "subjectName": "Math" },
            "1": { "day": "Vivt", "subjectName": "Chemistry" },
            "2": { "day": "Ser", "subjectName": "Geometry" }
        };
         return obj;
    }

    sayHi() {
        console.log(`I'm ${this.name} and I'm Student`);
    }

    getgrade(): Grade {
        return this.grade;
    }
    setgrade(value: Grade) {
        this.grade = value;
    }

}

class UniversityWorker extends Person implements IUniversityWorker {  
    numberOfYears: number;
    position: string;
    departmentName: string;
    constructor(protected name:string) {
        super(name);
    }
    printName():string{
        return this.name;
    }
    sayHi() {
        console.log(`I'm ${this.name} and I'm UniversityWorker`);
    }
    goToMeeting() {
        console.log(`I'm comming: ` + this.printName());
    }
}

class Professor extends UniversityWorker {  
    constructor(protected name:string) {
        super(name);
    }
    putGrade <T extends Student>(value: Grade, obiekt:T){
        obiekt.setgrade(value);
        console.log('Student got grade: ' + value);
    }

    sayHi() {
        console.log(`I'm ${this.name} and I'm Professor`);
    }

}

class Dekan extends UniversityWorker {  
    constructor(protected name:string) {
        super(name);
    }

    sayHi() {
        console.log(`I'm ${this.name} and I'm Dekan`);
    }

}

class Secretary extends UniversityWorker {  
    constructor(protected name:string) {
        super(name);
    }

    sayHi() {
        console.log(`I'm ${this.name} and I'm Secretary`);
    }
}

const student1 = new Student('Alla');  
const professor = new Professor('Ivan Ivanov'); 
const dekan = new Dekan('Petro Petrov'); 
const sekretar = new Secretary('Olga Vasilevna'); 

const universityPeople:Array<Person> = [student1,sekretar, professor, dekan];
const lecturePeople:Array<Student|Professor> = [student1,professor]; 
const universityWorkers:Array<UniversityWorker> = [sekretar, professor, dekan];

student1.initDefaultSchedule();
console.log ('schedule: ' + JSON. stringify(student1.schedule));

const studentMentorCortage: [Student, Professor] = [student1, professor];
studentMentorCortage[1].putGrade(Grade.good,studentMentorCortage[0] )

for (const person of universityPeople) {  
    person.sayHi();
}

for (const worker of universityWorkers) {  
    goToUniMeeting(worker);
    getSalary(worker);
}




