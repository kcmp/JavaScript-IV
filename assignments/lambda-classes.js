// CODE here for your Lambda Classes

class People {
    constructor (attributes) {
       this.name = attributes.name;
       this.age = attributes.age;
       this.location = attributes.location;
       this.gender = attributes.gender;
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
}

class Student extends People {  // child of People 
    constructor (theStudent) {
        super (theStudent)
        this.previousBackground = theStudent.previousBackground;
        this.className = theStudent.className;
        this.favSubjects = theStudent.favSubjects;
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

// stretch goals version 
// CODE here for your Lambda Classes


