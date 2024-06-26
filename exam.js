function pass()
 {
    var name = document.getElementById("name").value;
var p = document.getElementById("p");
var pass=Math.random() *100;
if(pass >=35){
    p.innerHTML = name +"you are pass"+pass;
    }
    
else{
    p.innerHTML = name +"you are fail"+pass;
}
 }