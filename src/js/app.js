import Person from './Person.js';
import Team from './Team.js';

const deamon = new Person('Демон', 'Deamon')
const bowman = new Person('Лучник', 'Bowman')
const zombie = new Person('Зомби', 'Zombie')

const enemy = new Team()

enemy.members.add(deamon)
enemy.members.add(bowman)
enemy.members.add(zombie)

const iter = enemy[Symbol.iterator]()

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())










