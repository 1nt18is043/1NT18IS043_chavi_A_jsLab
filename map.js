//Demonstrating map

let students = new Map();
students.set('1NT18IS001', 'Ananya');
students.set('1NT18IS012','Rahul');
students.set('1NT18IS034','Lisa');

console.log('The student USNs are:' + students.entries());
let entries = students.entries();
console.log(entries);

console.log('\n Size of students is:' + students.size);

let keys=students.keys();
console.log('\n Students keys are:');
console.log(keys);
console.log('\n Students values are:');
let values=students.values();
console.log(values);

console.log('\n Name of USN 1NT18IS001 is:' + students.get('1NT18IS001'));

console.log('\n Displaying all student usns and their names:');
for(let [key,value] of students)
{
    console.log(value + ' is the name of usn:' + key);

}

console.log('\n');
//Set demonstration
let mySet = new Set();
let set1 = new Set([1,2,3,4,5],'string',{"objectKey":"ObjValue"});
console.log(set1);

console.log(set1.entries());
if(set1.has('string'))
{
    set1.delete('string');
}
else
{
    set1.clear();
}

set1.add(50);

console.log(set1.entries());
console.log(set1.size);
console.log(set1.values());


console.log('\n');
//Comparing performance between Object and Map
let obj= {id:1,wt:20,dm:25}
let map= new Map();
map.set('fruits','vegetables');
let res;
console.time('Object');
res=Object.entries(obj);
console.log(res);
console.timeEnd('Object');

console.time('Map');
res=map.entries();
console.log(res);
console.timeEnd('Map');
console.log('\n');

//Converting Object into Map and vice versa
const objToMap = new Map(Object.entries(obj));
console.log(objToMap);

//Converting Map into Object
let map2= new Map([
    ['Book','Harry Potter'],
    ['Author','J.K Rowling']
]);

let obj2 = Object.fromEntries(map2);
console.log(obj2);

console.log('\n');

//Union operation on set
let even_set = new Set([1,3,5]);
let odd_set = new Set([2,4,6]);
let union = new Set([...even_set,...odd_set]);
console.log(union);