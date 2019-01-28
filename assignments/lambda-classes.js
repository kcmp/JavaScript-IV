// CODE here for your Lambda Classes

// class People {
//     constructor (attributes) {
//        this.name = attributes.name;
//        this.age = attributes.age;
//        this.location = attributes.location;
//        this.gender = attributes.gender;
//     }
//     speak (){
//         return `Hello my name is ${this.name}, I am from ${this.location}.`
//     }
// }

// class Instructor extends People {  // child of People 
//     constructor (instructor) {
//         super (instructor)
//         this.favLanguage = instructor.favLanguage;
//         this.specialty = instructor.specialty;
//         this.catchPhrase = instructor.catchPhrase;
//     }
//     demo (subject){
//         return `Today we are learning about ${subject}.`
//     }
//     grade (student, subject){
//         return `${student.name} receives a perfect score on ${subject}.`
//     }
// }

// class Student extends People {  // child of People 
//     constructor (theStudent) {
//         super (theStudent)
//         this.previousBackground = theStudent.previousBackground;
//         this.className = theStudent.className;
//         this.favSubjects = theStudent.favSubjects;
//     } 
//     listSubjects (){
//         this.favSubjects.forEach((subject)=> {
//             console.log(subject)
//         });
//     }
//     PRassignment (subject){
//         return `${this.name} has submitted a PR for ${subject}`;
//     }
//     sprintChallenge (subject) {
//         return `${this.name} has begun sprint challenge on ${subject}`;
//     }

// }

// class ProjectManager extends Instructor{ // extends Instructor
//     constructor (pm) {
//         super (pm)
//         this.gradClassName = pm.gradClassName;
//         this.favInstructor = pm.favInstructor;
//     }
//     standUp (channel){
//        return  `${this.name} announces to ${channel}, @channel standby times!`
//     }
//     debugsCode (student, subject){
//         return `${this.name} debugs ${student.name}'s code on ${subject}`
//     }
// }

// stretch goals version 
// CODE here for your Lambda Classes


class People {
    constructor (person) {
       this.name = person.name;
       this.age = person.age;
       this.location = person.location;
       this.gender = person.gender;
    }
    speak (){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends People {  // child of People 
    constructor (instructor) {
        super (instructor)
        this.favLanguage = instructor.favLanguage;
        this.specialty = instructor.specialty;
        this.catchPhrase = instructor.catchPhrase;
    }
    demo (subject){
        return `Today we are learning about ${subject}.`
    }
    grade (student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    }
    gradeTest (student){
        // grade = Math.floor(Math.random () * 45) + 55;
        student.grade = student.grade = Math.floor(Math.random () * 45) + 55;
        // grade = this.grade
        return `${student.name} received a grade of ${student.grade}`
        grade.push(student.grade)

    }
}

class Student extends People {  // child of People 
    constructor (theStudent) {
        super (theStudent)
        this.previousBackground = theStudent.previousBackground;
        this.className = theStudent.className;
        this.favSubjects = theStudent.favSubjects;
        this.grade = theStudent.grade;
    } 
    listSubjects (){
        this.favSubjects.forEach((subject)=> {
            console.log(subject)
        });
    }
    PRassignment (subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate (grade){
        if (this.grade >= 70){
            return `${this.name} graduated!! Woohoo!! Lambda is the best!`
        } else {
            return `You will get this soon, but you can't graduate just yet, ${this.name}!`
        }
    }

}

class ProjectManager extends Instructor{ // extends Instructor
    constructor (pm) {
        super (pm)
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }
    standUp (channel){
       return  `${this.name} announces to ${channel}, @channel standby times!`
    }
    debugsCode (student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const cameron = new Instructor ({
    name: 'Cameron',
    location: 'SomeWhere, USA',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack',
    catchPhrase: `Alexa turned on my music`
});

const josh = new Instructor ({
    name: 'Josh',
    location: 'Salt Lake City',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack',
    catchPhrase: `Hi, I am Josh` 
});

const urkel = new Student ({
    name: 'Urkel',
    location: 'NYC',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack',
    catchPhrase: `Did I do that?`,
    previousBackground: 'International relations',
    className: 'FSWPT4',
    favSubjects: ['Html', 'CSS', 'JavaScript', 'node.js'],
    grade: 99
});

const aude = new Student ({
    name: 'Aude',
    location: 'DC',
    age: 25,
    gender: 'female',
    previousBackground: 'tech related',
    className: 'FSWPT4',
    favSubjects: ['JavaScript', 'Python'],
    grade: 91
});

const naval = new Student ({
    name: 'Naval',
    location: 'Bay Area',
    age: 22,
    gender: 'male',
    previousBackground: 'tech related',
    className: 'FSWPT4',
    favSubjects: ['css.LESS', 'CSS', 'JavaScript'],
    grade: 90
});

const don = new Student ({
    name: 'Don',
    location: 'Houston',
    age: 28,
    gender: 'male',
    previousBackground: 'musician',
    className: 'FSWPT4',
    favSubjects: ['ruby', 'JavaScript'],
    grade: 50
});

const austin = new ProjectManager ({
    name: 'Austin',
    location: 'Central USA',
    age: 27,
    gender: 'male',
    gradClassName: 'FT#',
    favInstructor: 'Josh'
});

const margo = new ProjectManager ({
    name: 'Margo',
    location: 'Utah',
    age: undefined,
    gender: 'female',
    gradClassName: 'FT3',
    favInstructor: 'Cameron'
});


console.log(cameron)
console.log(josh.favLanguage)
console.log(cameron.speak())
console.log(cameron.demo('JavaScriptIV'))
console.log(josh.grade(urkel, 'JavaScriptII'))
console.log(urkel)
console.log(urkel.favSubjects)
console.log(austin)
console.log(austin.standUp('FSWPT3'))
console.log(austin.debugsCode(urkel, 'JSIV homework'))
console.log(cameron.gradeTest(urkel))
console.log(austin.gradeTest(naval))
console.log(margo.standUp('FSWPT3'))
console.log(josh.gradeTest(aude))
console.log(urkel.graduate())
console.log(naval.graduate())
console.log(aude.graduate())
console.log(don.graduate())

