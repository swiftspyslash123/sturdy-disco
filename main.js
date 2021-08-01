var nameofthepizzaarray=[];
function submit(){
    var name1=document.getElementById("Pizza1").value;
    var name2=document.getElementById("Pizza2").value;
    var name3=document.getElementById("Pizza3").value;
    var name4=document.getElementById("Pizza4").value;
    nameofthepizzaarray.push(name1);
    nameofthepizzaarray.push(name2);
    nameofthepizzaarray.push(name3);
    nameofthepizzaarray.push(name4);
    console.log(nameofthepizzaarray);
    document.getElementById("displayname").innerHTML=nameofthepizzaarray;
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}
function sorting(){
    nameofthepizzaarray.sort();
    console.log(nameofthepizzaarray);
    document.getElementById("displayname").innerHTML=nameofthepizzaarray;
}