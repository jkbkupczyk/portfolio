<?php
    if(!empty($_POST['name']) && !empty($_POST['email'])){
        if(!(strlen($_POST['msg']) > 200)){
            mail("jkbkupczyk@gmail.com", "Portfolio", $_POST['msg']);
        }
    }
?>