export default class Pokemon{
    constructor(name){
      this.name = name
    }
  
    sayHello(){
      console.log(`Mi pokemon ${this.name} te dice hola amigo como estas !!!`)
    }
  
    sayMessage(msg){
      console.log(`Mi pokemon ${this.name} te dice: ${msg}`)
    }
  }