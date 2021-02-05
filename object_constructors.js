function Player(name, marker) {
  this.name = name;
  this.market = marker;
  this.sayName = function () {
    console.log(name);
  };
}

const player1 = new Player('Jared', 'X');
const player2 = new Player('Lindsay', 'O');
player1.sayName();
player2.sayName();

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, is ${this.pages} pages, ${read}.`;
  };
}

const theHobbit = new Book('The Hobbit', 'JRR Tolkein', 295, 'not read yet');
console.log(theHobbit.info());

// Prototype - another object that the original object inherits
function Student() {}
Student.prototype.sayName = function () {
  console.log(this.name);
};
function EighthGrader(name) {
  this.name = name;
  this.grade = 8;
}
EighthGrader.prototype = Object.create(Student.prototype);
const jared = new EighthGrader('Jared');
jared.sayName();
