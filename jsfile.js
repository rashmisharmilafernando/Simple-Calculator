//Add function

function add(){

    var num_1=parseInt(document.getElementById("num1").value);
    var num_2=parseInt(document.getElementById("num2").value);
    var label= document.getElementById("display");
    label.value= num_1 + num_2;

    console.log("Add :- "+(num_1+num_2));
}


//reduce function

function reduce(){
    var num_1=document.getElementById("num1").value;
    var num_2=document.getElementById("num2").value;

    var label= document.getElementById("display");
    label.value= num_1 - num_2;

    console.log("reduce  :- " +(num_1 - num_2));
}

//multiplication function

function multiplication(){
    var num_1=document.getElementById("num1").value;
    var num_2=document.getElementById("num2").value;

    var label= document.getElementById("display");
    label.value= num_1 * num_2;

    console.log("multiplication  :- " +(num_1 * num_2));
}

//division function

function division(){
    var num_1=document.getElementById("num1").value;
    var num_2=document.getElementById("num2").value;

    var label= document.getElementById("display");
    label.value= num_1 / num_2;

    console.log("division  :- " +(num_1 / num_2));
}

