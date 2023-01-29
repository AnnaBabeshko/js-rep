const a = 'переменная "a" в script-1.js'

console.log(a);

const b = 'переменная "b" в script-1.js';

console.log(b);

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
 
   getPotions() {
    return this.potions;
  },
  
  addPotion(newPotion) {
    const { potions } = this;
    for (const potion of this.potions) {
      //const { name } = this.potion;
      if (potion.name === newPotion.name) {
   // if (newPotion.name === name) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;       
      }
    }
     this.potions.push(newPotion);      
  },
  
  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      const {name} = potions[i];
      if (potionName === name) {
       this.potions.splice(i, 1);
      }
    }    
  },
 
  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (const {name} of potions) {      
     
      
      if ( name === newName) {
         return `Potion ${newName} is not in inventory!`;            
         }      
      } 
    potions.splice(oldName, 1, newName)   
  }, 
  };
  
  

