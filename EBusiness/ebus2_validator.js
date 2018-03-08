/* global $ */

function validateDetails(){
  
    var pin;
    
    pin = document.getElementById("user_pin").value;
     name = document.getElementById("user_name").value;
    
    if (pin==""){
        alert("Please enter a valid PIN");
        }
    else if (String(pin).length<4){
        alert("Please make sure your PIN is valid");
        }
    else if (String(pin).length=4, name==""){
        alert("Please enter a valid Name")
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



  