var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Grade;
(function (Grade) {
    Grade["exelent"] = "A";
    Grade["veryGood"] = "B";
    Grade["good"] = "C";
    Grade["passing"] = "D";
    Grade["failure"] = "F";
})(Grade || (Grade = {}));
function goToUniMeeting(obiekt) {
    obiekt.goToMeeting();
}
function getSalary(obiekt) {
    console.log('Have got salary!');
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHi = function () {
        console.log("I'm ".concat(this.name, " and I'm Person"));
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.schedule = _this.initDefaultSchedule();
        _this.grade = null;
        return _this;
    }
    Student.prototype.initDefaultSchedule = function () {
        var obj = {
            "0": { "day": "Pon", "subjectName": "Math" },
            "1": { "day": "Vivt", "subjectName": "Chemistry" },
            "2": { "day": "Ser", "subjectName": "Geometry" }
        };
        return obj;
    };
    Student.prototype.sayHi = function () {
        console.log("I'm ".concat(this.name, " and I'm Student"));
    };
    Student.prototype.getgrade = function () {
        return this.grade;
    };
    Student.prototype.setgrade = function (value) {
        this.grade = value;
    };
    return Student;
}(Person));
var UniversityWorker = /** @class */ (function (_super) {
    __extends(UniversityWorker, _super);
    function UniversityWorker(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    UniversityWorker.prototype.printName = function () {
        return this.name;
    };
    UniversityWorker.prototype.sayHi = function () {
        console.log("I'm ".concat(this.name, " and I'm UniversityWorker"));
    };
    UniversityWorker.prototype.goToMeeting = function () {
        console.log("I'm comming: " + this.printName());
    };
    return UniversityWorker;
}(Person));
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Professor.prototype.putGrade = function (value, obiekt) {
        obiekt.setgrade(value);
        console.log('Student got grade: ' + value);
    };
    Professor.prototype.sayHi = function () {
        console.log("I'm ".concat(this.name, " and I'm Professor"));
    };
    return Professor;
}(UniversityWorker));
var Dekan = /** @class */ (function (_super) {
    __extends(Dekan, _super);
    function Dekan(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Dekan.prototype.sayHi = function () {
        console.log("I'm ".concat(this.name, " and I'm Dekan"));
    };
    return Dekan;
}(UniversityWorker));
var Secretary = /** @class */ (function (_super) {
    __extends(Secretary, _super);
    function Secretary(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Secretary.prototype.sayHi = function () {
        console.log("I'm ".concat(this.name, " and I'm Secretary"));
    };
    return Secretary;
}(UniversityWorker));
var student1 = new Student('Alla');
var professor = new Professor('Ivan Ivanov');
var dekan = new Dekan('Petro Petrov');
var sekretar = new Secretary('Olga Vasilevna');
var universityPeople = [student1, sekretar, professor, dekan];
var lecturePeople = [student1, professor];
var universityWorkers = [sekretar, professor, dekan];
student1.initDefaultSchedule();
console.log('schedule: ' + JSON.stringify(student1.schedule));
var studentMentorCortage = [student1, professor];
studentMentorCortage[1].putGrade(Grade.good, studentMentorCortage[0]);
for (var _i = 0, universityPeople_1 = universityPeople; _i < universityPeople_1.length; _i++) {
    var person = universityPeople_1[_i];
    person.sayHi();
}
for (var _a = 0, universityWorkers_1 = universityWorkers; _a < universityWorkers_1.length; _a++) {
    var worker = universityWorkers_1[_a];
    goToUniMeeting(worker);
    getSalary(worker);
}
