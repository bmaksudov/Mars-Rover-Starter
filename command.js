class Command {
   constructor(commandType, value) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;
   }
 
 }
 // spec/command.spec.js

let Command = require('../command');

describe('Command', () => {
  describe('constructor', () => {
    it('throws error if a command type is NOT passed into the constructor as the first parameter', () => {
      expect(() => new Command()).toThrow();
    });

    it('constructor sets command type', () => {
      const command = new Command('MOVE');
      expect(command.commandType).toBe('MOVE');
    });

    it('constructor sets a value passed in as the 2nd argument', () => {
      const command = new Command('MOVE', 12000);
      expect(command.value).toBe(12000);
    });
  });
});

 module.exports = Command;