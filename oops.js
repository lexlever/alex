
const alex = document.getElementById('name').name
const age = document.getElementById('age').date
const major = document.getElementById('major').skill
const hobby = document.getElementById('hobby').hobb
const sex = document.getElementById('sex').type
const person = document.getElementById('bio').type

function Profile(alex, age, major, hobby, gender) {
    this.alex = alex[1];
    this.age = age[1];
    this.major = major[1];
    this.hobby = hobby[1];
    this.gender = gender[1];
    this.bio = function() {
        person.innerHTML = 'Your name is ' + this.alex + ' and you are ' + this.age + ' years old majoring in ' + this.major + '.' + ' Your best hobby is ' + this.hobby + '.'
    }
    this.greeting = function() {
        feedback.innerHTML = 'Hello and welcome' + this.gender + ' ' + this.alex + '.'
    }
}

var persons = new Profile(alex, age, major, hobby, sex)