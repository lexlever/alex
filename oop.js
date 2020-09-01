

// this is object oriented programming calling out a function
/*
function Person(name) {
    this.name = name
    this.greeting = function() {
        alert("welcome to your account " + name)
    }
  }

let person1 = new Person('Alex')
let person2 = new Person('Jane') 

function Wash(cloth) {
    this.cloth = cloth
    this.who = function() {
        alert ('The cloth is washed by ' + cloth)
    }
}

let jeans = new Wash('Alex')
let shirts = new Wash('Mum')
let shoes = new Wash('Victor')
let jackets = new Wash('Samuel')

function Alex(call) {
    this.call = call
    this.hello = function() {
        alert('hello my name is ' + this.call + 'and I am aspiring to be a developer')
    };
}


    {
        call = "sam"
    }
    {
        call = "jannet"
    }
*/

let sammy = prompt('what is your first name?')
let mwaniki = prompt('what is your last name?')
let miaka = prompt('how old are you')
let ComputerProgramming = prompt('what is your major')
let swimming = prompt('what is your favourite hobby')
let sex = mary()

function mary() {
    var x = prompt('what is your gender')
    if (x == 'male') {
        return "Mr"
    }else if (x == 'female'){
        return "Mrs"
    }
}
function Person(first, last, age, career, interest, sex) {
    this.first = first;
    this.last = last
    this.age = age
    this.career = career
    this.interest = interest
    this.sex = sex
    this.bio = function() {
        alert('My name is ' + this.first + ' ' + this.last + " and I am twenty three years of age majoring in " + this.career + " and I really like " + this.interest)
    }
    this.greeting = function() {
        alert('hello and welcome to our website ' + this.sex + ' ' + this.first + ' ' + this.last)
    }
}

let sam = new Person(sammy, mwaniki, miaka, ComputerProgramming, swimming, sex)