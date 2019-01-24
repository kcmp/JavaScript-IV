/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


//GameObject
// function GameObject(object) {
//     this.createdAt = object.createdAt;
//     this.dimensions = object.dimensions;
//   }
  
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
//   };

//CharacterStats
// function CharacterStats(gameStats) {
//     GameObject.call(this, gameStats);
//     this.healthPoints = gameStats.healthPoints;
//     this.name = gameStats.name;
  
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`;
  
//   };

//Humaniod
// function Humanoid (gameHumanoid) {
//     this.team = gameHumanoid.team;
//     this.weapons = gameHumanoid.weapons;
//     this.language = gameHumanoid.language;
  
//     CharacterStats.call(this, gameHumanoid);
//   }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}`;
//   }
  