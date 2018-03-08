<?php
//Start the session
session_start();
?>



<!DOCTYPE html>
<html>
    <head>
        <title>Receipt</title>
        
        <link rel="stylesheet" href="ebus_pages.css" type="text/css"/>
         <link rel="stylesheet" href="../mystylesheet.css" type="text/css" />
        
    </head>
    <body>
        <div id="receipt">
            <h4>Receipt</h4>
         
         
          <?php echo "Subtotal: &euro;". $_SESSION["subtotal"]; ?>
            <br/>
            <br/>
           <?php echo "Discount: &euro;". $_SESSION["discount"]; ?>
            <br/>
            <br/>
           <?php echo "VAT: &euro; ". $_SESSION["vat"]; ?>
            <br/>
            <br/>
            <?php echo "Total: &euro;". $_SESSION["total"] . "."; ?>
         
         </div>   
    </body>
    
      
    
</html>