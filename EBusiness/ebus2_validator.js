/* global $ */

function validateDetails(){
    
    var pin;
    
    pin = document.getElementById("user_pin").value;
    
    if (pin==""){
        alert("Please enter a valid PIN");
        }
    else if (String(pin).length<4){
        alert("Please make sure your PIN is valid");
        }
    else{
        enablebtnPurchase();
        }
}

function enablebtnPurchase(){
     $('#btnPurchase').prop('disabled',false);
}

function disablebtnPurchase(){
     $('#btnPurchase').prop('disabled',true);
}


function validateDetails(){
    
    var name;
    
    name = document.getElementById("user_pin").value;
    
    if (name==""){
        alert("Please enter a valid PIN");
        }
    else if (String(name).length<4){
        alert("Please make sure your PIN is valid");
        }
    else{
        enablebtnPurchase();
        }
}