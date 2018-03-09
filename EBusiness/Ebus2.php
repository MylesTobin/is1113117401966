<?php
//Start the session
session_start();
?>




<!DOCTYPE html>
<html>
    <head>
        
        <title> Enter Details</title>
        
        
        <!--jQuery-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </head>
    
    <body>
        <!--Payment details-->
        <h4>Please enter your payment details.</h4>
        
            <br>
            
            <form action="Ebus3.php" method="POST">
            
           <div class="validation">
               <label for="username" class="lblname">
                Name:
                <input type="name" id="username" name="username" placeholder="Enter Your Name">
            </label>
            
            <br>
            
            <label for="useremail" class="lblemail">
                Email:
                <input type="email" id="useremail" name="useremail" placeholder="example@gmail.com">
            </label>
            
            <br>

            <label for="userpin" class="lblpin">
                Pin:&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="pin" id="userpin" name="userpin" placeholder="Enter PIN" maxlength="4" pattern="\d{4}">
                <br>
                (Numeric Characters only for PIN)
            </label>
            
            <br>
            <br>
            
            <button class="btnproceed" type="submit" id="btnPurchase" disabled>Proceed with Purchase</button>
        </form>
        
        <br>
        
        <button class="btnvalidate" onClick="validateName()">Validate</button>
    </div> 
    </div>
        <?php  
        // Set session variables
          $_SESSION["total"] = $_POST["total"];
          
        ?>
        
        
        
    </body>
    
    
    
</html>