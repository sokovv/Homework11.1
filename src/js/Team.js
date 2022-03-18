
class Team {
    constructor() {
        this.members = new Set();
    }

    [Symbol.iterator]() {
        return this.members[Symbol.iterator]();
      }

    add(Character) {
        if (this.members.has(Character)) {
            throw new Error('Персонаж имеется в команде');
        }
        this.members.add(Character)

    }
}

export default Team