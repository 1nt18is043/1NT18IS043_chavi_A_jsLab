//multi level
class animal{
    constructor(name){
    this.name=name;
    }
    func(){
    console.log("It is an animal");}
    }
 class dog extends animal{
    constructor(name){
    super(name);        
    }
    func(){
    console.log("It is a dog");} 
    }
class pug extends dog{
    constructor(name){
    super(name);       
     }
    func(){
    console.log("It is a pug");} 
    }
const a = new pug;
a.func("Pug");
const b = new animal;
b.func("Pug"); 