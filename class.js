/**
 * class --> template
 * properties
 * method (a special type of function inside a class without the function keyword)
 *
 *
 * object
 *
 *
 */

class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.location = "Bangladesh";
    // console.log('calling the constructor method', name)
  }
  goal() {
    console.log("score a goal");
  }
  getTeamName() {
    return "rasel";
  }
}

const player1 = new Player("said", 33);
const player2 = new Player("shemul", 11);

console.log(player1 instanceof Player);
console.log(player2);

// player1.goal()
// console.log(player1)
