let age = prompt("Enter Your Age");

if (age >=18){
   document.getElementById("fs").innerText = "feedback:You are old enough to drive";
}
else{
    // document.getElementById("js").innerText = prompt("Enter no of Years to turn 18");
       var a = prompt("Enter no of Years to turn 18");
    document.getElementById("js").innerText = "Feedback:" +  a  + "years less to turn 18";
    
};