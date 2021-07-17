var arr=new Array;

function fun(){
    var num=document.getElementById("text").value;
    arr.push(num);
}
function disp(){
    arr1=arr.sort();
document.getElementById("arr").innerHTML=arr1;

}