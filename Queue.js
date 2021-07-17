class Queue {
  
    
    constructor()
    {
        this.items = [];
    }
  
    
    add(element)
{
    
    this.items.push(element);
}
    
    remove()
{
    
    if (this.items.length == 0)
        return "Underflow";
    return this.items.shift();
}
  
    front()
{
    
    return this.items[0];
}
    
    isEmpty()
{
    
    return this.items.length == 0;
}
  
printQueue()
{
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
}
}
var queue = new Queue();

console.log("Queue is empty?");
console.log(queue.isEmpty()); 
console.log("Dequeue operation:");
console.log(queue.remove()); 

queue.add(5);
queue.add(10);
queue.add(15);
queue.add(20);
queue.add(25);
queue.add(30);

console.log("Queue is:");
console.log(queue.printQueue());
 
console.log("First element of queue:");
console.log(queue.front());
  
console.log("Removed element is:");
console.log(queue.remove());
 
console.log("Queue is:");
console.log(queue.printQueue());

console.log("Queue is empty?");
console.log(queue.isEmpty()); 