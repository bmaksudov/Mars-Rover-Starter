class Rover {
<<<<<<< HEAD
   constructor(position) {
     this.position = position;
     this.mode = 'NORMAL';
     this.generatorWatts = 110;
   }
 
   receiveMessage(message) {
     const response = {
       message: message.name,
       results: []
     };
 
     message.commands.forEach(command => {
       let result = { completed: true };
       
       switch (command.commandType) {
         case 'STATUS_CHECK':
           result.roverStatus = {
             mode: this.mode,
             generatorWatts: this.generatorWatts,
             position: this.position
           };
           break;
         case 'MODE_CHANGE':
           this.mode = command.value;
           break;
         case 'MOVE':
           if (this.mode === 'LOW_POWER') {
             result.completed = false;
           } else {
             this.position = command.value;
           }
           break;
         default:
           result.completed = false;
           break;
       }
       
       response.results.push(result);
     });
 
     return response;
   }
 }
 
 module.exports = Rover;
 
=======
   // Write code here!
}

module.exports = Rover;
>>>>>>> 1fe6520699170ce29b40f4fde34dedeff4410a55
