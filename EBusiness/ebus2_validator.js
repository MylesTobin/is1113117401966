/* global $ */

function validateDetails(){
  
    var pin;
    
    pin = document.getElementById("user_pin").value;
     name = document.getElementById("user_name").value;
     email = document.getElementById("user_email").value
    
    if (pin==""){
        alert("Please enter a valid PIN");
        }
    else if (String(pin).length<4){
        alert("Please make sure your PIN is valid");
        }
    else if (String(pin).length=4, name==""){
        alert("Please enter a valid Name")
    }
    else if (String(pin).length=4, email==""){
        alert("Please enter a valid Email")
    }
        else{
            enablebtnPurchase()
        }
        
        
        var name;
    
    
    
    if (name==""){
        alert("Please enter a valid Name");
        }
   else if (name!="", String(pin).length<4){
       alert("Please enter a valid PIN");
   }
    
    else if (name!="", email==""){
        alert("Please enter a valid Email")
        
        
    }
    else{
        enablebtnPurchase();
        }
        
       
        
        
        var email;
        if (email==""){
            alert("Please enter a valid Email");
        }
        else if (email!="", name==""){
            alert("Please enter a valid Name")
        }
        else if (email!="", pin==""){
            alert("Please enter a valid PIN")
        }
        
        


function enablebtnPurchase(){
     $('#btnPurchase').prop('disabled',false);
}

function disablebtnPurchase(){
     $('#btnPurchase').prop('disabled',true);
}



  